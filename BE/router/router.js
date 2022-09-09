import { Router } from "express";
import controller from "../userController.js";
import { check } from "express-validator";
import cors from "cors";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();
router.use(cors());

router.post(
  "/registration",
  [
    check("name", "Name can`t be empty").notEmpty(),
    check("password", "Password is too short").isLength({ min: 6 }),
  ],
  (req, res) => {
    controller.registration(req, res);
  }
);

router.post("/login", (req, res) => {
  controller.signIn(req, res);
});

router.get("/games", authMiddleware, (req, res) => {
  controller.getGames(req, res);
});

router.post("/userInfo", authMiddleware, (req, res) => {
    controller.getUserInfo(req, res);
});

router.post("/updateStat", (req, res) => {
    controller.updateStatistics(req, res);
})

export default router;