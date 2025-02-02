import express from "express";
export const userRouter = express.Router();
import { home, sampleUser } from "../controllers/user.controller.js";

userRouter.get("/", home);
userRouter.get("/sampleusers", sampleUser)
