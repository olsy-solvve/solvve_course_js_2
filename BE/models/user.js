import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: { type: String, required: true, unicode: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  country: {type: String},
  wins: {type: Number, default: 0},
  loses: {type: Number, default: 0},
});

const UserModel = mongoose.model("User", User);

export default UserModel;
