import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens, verifyAccessToken, verifyRefreshToken } from "../utils/auth.js";

// register API

const registerRoute = async (req, res) => {
    
    const {name, email, password} = req.body;

    const existingUser = await userModel.findOne({ email });
 
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists",
            errors: [
                {
                    path: "email",
                    message: "Email already exists"
                }
            ]
         });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await userModel.create({
        name,
        email,
        passwordHash: hashedPassword
    });

    const { accessToken, refreshToken } = generateTokens({ userId: user._id });

    user.refreshToken = refreshToken;
    await user.save();
 
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
    });

    res.status(201).json({
        message: "User registered successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            accessToken
        }
    });

}

// getMe API 

const getMeRoute = async (req, res) => {

    const accessToken = req.headers.authorization?.split(" ")[1];

    if (!accessToken) {
        return res.status(401).json({ message: "Access token is missing" });
    }

    try {
        const decoded = verifyAccessToken(accessToken);
        const user = await userModel.findById(decoded.id)

        res.status(200).json({
            message: "User fetched successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            accessToken
        });
    } catch (error) {
        return res.status(401).json({ message: "Invalid access token" });
    }

}

// newRefreshToken API

const newRefreshTokenRoute = async (req, res) => {

    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ message: "Refresh token is missing" });
    }
 
    try {
        const decoded = verifyRefreshToken(refreshToken);
        const user = await userModel.findById(decoded.id);

        if (refreshToken !== user.refreshToken) {
            user.refreshToken = null;
            await user.save();
            return res.status(401).json({ message: "Invalid refresh token" });
        }

        const { accessToken, refreshToken: newRefreshToken } = generateTokens({ userId: user._id });

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
        });

        user.refreshToken = newRefreshToken;
        await user.save();

        res.status(200).json({
            message: "New access token generated successfully",
            data: {
                accessToken
            }
        });


    } catch (error) {
        return res.status(401).json({ message: "Invalid refresh token" });
    }

}

export {
    registerRoute,
    getMeRoute,
    newRefreshTokenRoute
}