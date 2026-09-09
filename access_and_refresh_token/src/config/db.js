import mongoose from "mongoose";
import config from "./env.js";

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error while connecting DB", error);
        process.exit(1);
    }
}

export default connectDB;