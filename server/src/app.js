import express from "express";
import { userRouter } from "./routes/user.route.js";
export const app = express();


app.use("/api/v1/", userRouter);
