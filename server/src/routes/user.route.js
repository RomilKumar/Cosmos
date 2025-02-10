import express from "express";
export const userRouter = express.Router();
import { deleteAccount, getChannelProfile, login, logout, register, sampleUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/authentication.js";


userRouter.get("/sampleusers", sampleUser);
userRouter.get("/channel/:channelId", getChannelProfile);



userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/register", register);

userRouter.use(verifyJWT);

userRouter.delete("/delete", deleteAccount);




