import imagekit from "imagekit";
import dotenv from "dotenv";
dotenv.config();

const imagekitInstance = new imagekit({
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

const uploadImage = async (file, fileName) => {
    const obj = {
        file,
        fileName,
        folder: "/mini_insta_apis"
    }

    return await imagekitInstance.upload(obj);
}

export { uploadImage };