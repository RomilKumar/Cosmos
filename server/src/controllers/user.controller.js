import { NOT_FOUND, SERVER_ERROR } from "../../constants/errorCodes.js";
import { User } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

const getUser = async (searchInput) => {
    try {
        // const user = await User.findById(req.params.id);
        //user can be found using username, userid or user email
        const user = await User.findOne({
            $or: [
                [(user_id = searchInput)],
                [(user_name = searchInput)],
                [(user_email = searchInput)],
            ],
        });
        if (!user) {
            return { message: "User not found" };
        }
        return user;
    } catch (error) {
        throw error;
    }
};

const login = async (req, res) => {
    const { searchInput, password } = req.body;
    try {
        const user = await getUser(email);

        if (user) {
            const token = generateToken(user.user_id);

            // Set token in an HTTP-only cookie
            res.cookie("token", token, {
                httpOnly: true, // Prevents JavaScript access
                secure: process.env.NODE_ENV === "production", // Use secure cookies in production
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const register = async (req, res) => {
    const { username, firstname, lastname, email, password, contact } =
        req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            username,
            firstname,
            lastname,
            email,
            password,
            contact,
        });

        if (user) {
            const token = generateToken(user._id);

            // Set token in an HTTP-only cookie
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const logout = (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
};

const deleteAccount = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getChannelProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const sampleUser = async (req, res) => {
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
};
