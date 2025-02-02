import { User } from "../models/user.model.js";

// Define routes here or in separate route files
const home =async (req, res) => {
  res.send("Hello World!");
};

const sampleUser =  async (req, res) => {
  let sampleuser = new User({
    username: "sampleuser",
    email: "abc@gmail.com",
    password: "password",
});

await sampleuser.save();
console.log(sampleuser);
res.send(sampleuser);
};

export {
    home, 
    sampleUser
}
