import jwt from "jsonwebtoken";
import config from "../config/env.js";

const generateTokens = ({ userId }) => {
  const accessToken = jwt.sign({ id: userId }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ id: userId }, config.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

function verifyAccessToken(token) {
  const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
  return decoded;
}

function verifyRefreshToken(token) {
  const decoded = jwt.verify(token, config.REFRESH_TOKEN_SECRET);
  return decoded;
}

export { generateTokens, verifyAccessToken, verifyRefreshToken }; 
