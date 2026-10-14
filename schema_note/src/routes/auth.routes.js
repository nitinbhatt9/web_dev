import Router from "express";
import { login, register } from "../controller/auth.controller.js";

const router = Router();
router.post("/reg", register);
router.post("/log", login);

export default router;
