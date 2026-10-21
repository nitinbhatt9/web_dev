import { Router } from "express";
import { notes } from "../controller/note_controller.js";

const router = Router();

router.post("/addnotes", notes);

export default router;
