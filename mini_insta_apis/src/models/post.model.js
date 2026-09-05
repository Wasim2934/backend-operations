import mongoose from "mongoose";

const instaSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const instaModel = mongoose.model("instaModel", instaSchema);

export default instaModel;