import express from "express";
import mongoose from "mongoose";
import router from "./router/router.js";
const PORT = 3200;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const DB_URL =
  "mongodb+srv://solvve_course_js_2:solvve_course_js_2@solvvecoursejs2.ifnkood.mongodb.net/?retryWrites=true&w=majority";

const start = async () => {
  await mongoose.connect(DB_URL);
  app.listen(PORT, () => console.log("Server is working!"));
};

start();
