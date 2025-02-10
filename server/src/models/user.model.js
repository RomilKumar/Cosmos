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
    contact: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model("User", userSchema);

export { User };