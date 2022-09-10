import express from 'express';
import mongoose from "mongoose";
import router from "./router/router.js";
import DB_URL from "./db.js";

const PORT = process.env.PORT || 3200;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);


const start = async () => {
  await mongoose.connect(DB_URL);
  app.listen(PORT, () => console.log("Server is working!"));
};

start();
