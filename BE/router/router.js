import {Router} from "express";
import controller from "../userController.js";
import cors from "cors";
import {check} from "express-validator";

const router = Router();
router.use(cors());

router.post('/registration', [
    check('name', "Name can`t be empty").notEmpty(),
    check('password', "Password is too short").isLength({min:6}),
], (req, res) => {
    controller.registration(req, res);
});

router.post('/login', (req, res) => {
    controller.signIn(req, res);
});

export default router;