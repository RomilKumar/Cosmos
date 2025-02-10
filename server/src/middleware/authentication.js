import jwt from "jsonwebtoken";

export const verifyJWT = async (req, res, next) => {
  try {
    // Ensure token is extracted correctly from cookies
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!decodedToken) {
      return res.status(403).json({ message: "Token invalid" });
    }

    // Store user information in req for further middleware/routes
    req.user = decodedToken; // Assuming decodedToken contains user info (like id)

    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Token invalid", error: error.message });
  }
};
