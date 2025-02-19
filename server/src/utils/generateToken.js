import jwt from "jsonwebtoken";

const generateToken= async(userId, role)=>{
    return jwt.sign({userId, role}, process.env.TOKEN_SECRET, {expiresIn: process.env.TOKEN_EXPIRY});
}

export {generateToken};