import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        index: true,
    },
    firstname:{
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    email: {
        type:String,
        required: true,
        index: true,
    },
    password: {
        type:String,
        required: true,
    }, 
    createdAt: {
        type: Date,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

export { User };