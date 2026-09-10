import express from "express";
import { getMeRoute, registerRoute, newRefreshTokenRoute } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerRoute);
router.get("/me", getMeRoute);
router.post("/refresh", newRefreshTokenRoute);

export default router;