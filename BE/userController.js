import UserModel from "./models/user.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import tokenConfig from "./tokenConfig.js";

const generateToken = (id) => {
  const payLoad = {
    id,
  };
  return jwt.sign(payLoad, tokenConfig, { expiresIn: "24" });
};

class UserController {
  async registration(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Error", errors });
    }

    const { name, password, email, birthdayDate } = req.body;

    const candidate = await UserModel.findOne({ name });
    if (candidate) {
      return res.status(400).json({ message: "User already Registered" });
    }

    const hashPass = bcrypt.hashSync(password, 7);

    const user = new UserModel({
      name,
      password: hashPass,
      email,
      birthdayDate,
    });
    await user.save();
    return res.status(201).json({ message: "registered" });
  }

  async signIn(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json("You are not registered");
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Wrong passwword" });
    }

    const token = generateToken(user._name);

    return res.status(201).json({ token });
  }
}

const controller = new UserController();

export default controller;
