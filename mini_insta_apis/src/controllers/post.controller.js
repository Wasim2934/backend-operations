import { uploadImage } from "../service/imagekit.service.js";
import instaModel from "../models/post.model.js";

const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const file = req.file;

    if (!caption || !file) {
      return res
        .status(400)
        .json({ message: "Caption and image are required" });
    }

    const uploadedImage = await uploadImage(file.buffer, file.originalname);

    const postData = await instaModel.create({
      caption,
      image: uploadedImage.url,
    });

    res
      .status(201)
      .json({ message: "Post created successfully", post: postData });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await instaModel.find();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createPost, getAllPosts };
