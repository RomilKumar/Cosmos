import jwt from "jsonwebtoken";
import { NOT_FOUND } from "../constants/errorCodes.js";
import { getUser } from "../controllers/user.controller.js";

export const verifyJWT = async (req, res, next) => {
  try {
    // Ensure token is extracted correctly from cookies
    const token = req.cookies?.token;
    if (!token) {
      return res.status(NOT_FOUND).json({ message: "Token missing" });
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

    if (!decodedToken) {
      return res.status().json({ message: "Token invalid" });
    }

    const user =  await getUser(decodedToken.userId);

    if(!user){
      return res.status(BAD_REQUEST).json({message: "User not found"});
    }  

    // Store user information in req for further middleware/routes
    req.user = user; // Assuming decodedToken contains user info (like id)

    next();
  } catch (error) {
    return res
      .status(BAD_REQUEST)
      .json({ message: "Token invalid", error: error.message });
  }
};
