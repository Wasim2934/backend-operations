import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [30, "Name must be at most 30 characters long"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    passwordHash: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    }
}, { timestamps: true })

const userModel = mongoose.model("User", userSchema);

export default userModel;


