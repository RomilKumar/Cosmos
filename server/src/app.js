import express from "express";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/user.route.js";
export const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

// to parse JSON bodies
app.use(express.json());

// to parse form data
app.use(express.urlencoded({ extended: true }));

// Define a route handler for the base route
app.get("/", (req, res) => {
  res.send("User route is working!");
});

// Use the userRouter for any routes that start with /user

app.use("/api/users", userRouter);




