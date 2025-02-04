import jwt from "jsonwebtoken"
export const verifyJWT = async (req, res, next)=>{
    const token = req.cookie.token;
    if(!token){
        return {message: "token missing"}
    }
    const decodedToken =  jwt.verify(token, process.env.TOKEN_SECRET);
    if(!decodedToken){
        return {message: "token invalid"};
    }
    //get user from id from decoded token and save it in req.
    next();
}

