//Here app content
import express from "express";
export const app = express();
import { User } from "./db/models/user.js";

// Define routes here or in separate route files
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sampleusers", async (req, res) => {
  let sampleuser = new User({
    username: "sampleuser",
    email: "abc@gmail.com",
    password: "password",
});

await sampleuser.save();
console.log(sampleuser);
res.send(sampleuser);
});

