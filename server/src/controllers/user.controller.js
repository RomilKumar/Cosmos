import { User } from "../models/user.model.js";

const getUser = ()=>{

}

const login = () => {

}

const register = ()=>{

}

const logout = ()=>{

}

const deleteAccount = ()=>{

}

const getChannelProfile = ()=>{

}

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
    sampleUser,
    getUser,
    login,
    register,
    logout,
    deleteAccount,
    getChannelProfile,
}
