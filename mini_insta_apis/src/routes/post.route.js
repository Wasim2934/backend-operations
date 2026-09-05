import express from "express";
import { createPost } from "../controllers/post.controller.js";
import { getAllPosts } from "../controllers/post.controller.js";
import upload from "../config/config.multer.js";

const router = express.Router(); 

router.post(
	"/create",
	upload.single("image"),
	createPost
);

router.get(
	"/getPosts",
	getAllPosts
);

export default router;