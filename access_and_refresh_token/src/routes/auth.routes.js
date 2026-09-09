import express from "express";
import { registerRoute } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerRoute);

export default router;