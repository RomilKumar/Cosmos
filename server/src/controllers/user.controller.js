import { NOT_FOUND, SERVER_ERROR } from "../../constants/errorCodes.js";
import { User } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";
import { COOKIE_OPTIONS } from "../constants/cookieOptions.js";

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
    try {
        const { searchinput, password } = req.body;
        if (!searchinput || !password) {
            return res.status(BAD_REQUEST).json({ message: "missing Fields" });
        }

        const user = await getUser(searchinput);
        if (!user) {
            return res.status(NOT_FOUND).json({
                message: "user with this email or username does not exist ",
            });
        }

        const isValid = await bcrypt.compareSync(password, user.user_password);
        if (!isValid) {
            return res
                .status(BAD_REQUEST)
                .json({ message: "wrong credentials" });
        }
        //token fn generates a promise so frst let it resolve
        const token = await generateToken(user);

        await User.updateOne(
            { user_id: user.user_id },
            {
                $set: {
                    user_token: token,
                },
            }
        );
        const { user_token, user_password, ...loggedinUser } = user;
        return res
            .status(OK)
            .cookie("token", token, {
                ...COOKIE_OPTIONS,
                maxAge: process.env.TOKEN_MAXAGE,
            })
            .json(loggedinUser); // frst cookie will be sent!!(bcz .json(data) is the final response)
    } catch (err) {
        return res.status(SERVER_ERROR).json({
            error: err.message,
            message: "something went wrong while logging in the user",
        });
    }
};

const register = async (req, res) => {
    try {
        const {
            userName,
            firstName,
            lastName,
            password,
            email,
            role,
            contact,
        } = req.body;

        //empty field checks //pending optimised
        if (!userName || !firstName || !contact || !email || !password) {
            return res.status(BAD_REQUEST).json({ message: "missing fields" });
        }

        const existingUser = await getUser(userName);
        if (existingUser) {
            return res
                .status(BAD_REQUEST)
                .json({ message: "user already exists" });
        }

        const avatar = process.env.AVATAR_COMMON_URL;
        const userAvatar =
            gender.toLowerCase() === "male"
                ? avatar + `boy?${userName}`
                : gender.toLowerCase() === "female"
                ? avatar + `girl?${userName}`
                : "";

        const user = await User.create({
            user_id: uuid(),
            user_name: userName,
            first_name: firstName,
            last_name: lastName,
            user_password: password,
            user_avatar: userAvatar,
            user_gender: gender,
            user_email: email,
            user_role: role,
        });
        await user.save();

        const { user_password, ...createdUser } = user.toObject();

        return res.status(OK).json(createdUser);
    } catch (err) {
        return res.status(SERVER_ERROR).json({
            message: "Something went wrong while registering user",
            error: err.message,
        });
    }
};

const logout = async () => {};

export {
    getUser,
    login,
    register,
    logout,
    // deleteAccount,
    // getChannelProfile,
};
