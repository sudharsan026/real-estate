import express from "express";
import { googleLogin, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", googleLogin);

export default router;
