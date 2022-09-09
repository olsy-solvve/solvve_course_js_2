import UserModel from "./models/user.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import tokenConfig from "./tokenConfig.js";

const generateToken = (name) => {
  const payLoad = {
    name,
  };
  return jwt.sign(payLoad, tokenConfig, { expiresIn: "24h" });
};

class UserController {
  async registration(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Error", errors });
    }

    const { name, password, email, country } = req.body;

    const candidate = await UserModel.findOne({ name });
    if (candidate) {
      return new Error("User already Registered");
    }

    const hashPass = bcrypt.hashSync(password, 7);

    const user = new UserModel({
      name,
      password: hashPass,
      email,
      country,
    });
    await user.save();
    return res.status(201).json({
      message: "registered",
      name: user.name,
      country: user.country,
      email: user.email,
    });
  }

  async signIn(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return new Error("You are not registered");
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return new Error("Wrong passwword");
    }

    const token = generateToken(user._name);

    return res.status(201).json({
      message: "you are logged in",
      token: token,
      name: user.name,
    });
  }

  async getUserInfo(req, res) {
    const {name} = req.body;
    const userInfo = await UserModel.findOne({ name });

    if (!userInfo) {
      return new Error("You are not registered");
    }

    return res.status(201).json({
      message: "found",
      name: userInfo.name,
      email: userInfo.email,
      country: userInfo.country,
    });
  }

  async updateStatistics(req, res) {
    const name = req.headers.solvveUsername;
    const { result } = req.body;

    if (result == "1") {
      await UserModel.updateOne({ name }, {
        $set: {
          wins: result
        }
      })
    }
    return res.status(201).json({ message: "updated" })
  }
}

const controller = new UserController();

export default controller;
