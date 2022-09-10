import UserModel from "./models/user.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import tokenConfig from "./tokenConfig.js";
import user from "./models/user.js";

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
      return res.status(404).json({ message: "Error", errors });
    }

    const { name, password, email, country } = req.body;

    const candidate = await UserModel.findOne({ name });
    if (candidate) {
      return res.status(404).json({message: "User already Registered"});
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
      return res.status(404).json({message: "You are not registered"});
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(404).json({message: "Wrong password"});
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
      return res.status(404).json({message: "You are not registered"});
    }

    return res.status(201).json({
      message: "found",
      name: userInfo.name,
      email: userInfo.email,
      country: userInfo.country,
      wins: userInfo.wins,
      loses: userInfo.loses
    });
  }

  async updateStatistics(req, res) {
    const name = String(req.headers.name);
    const result = Number(req.body.result);

    if (result === 1) {
      const currentWins = await UserModel.findOne({ name });
      await UserModel.updateOne({ name: name }, {
        wins: currentWins.wins + 1
      });
    } else {
      const currentLoses = await UserModel.findOne({ name });
      await UserModel.updateOne({ name: name }, {
        loses: currentLoses.loses + 1
      });
    }
    return res.status(201).json({ message: "updated" })
  }
}

const controller = new UserController();

export default controller;
