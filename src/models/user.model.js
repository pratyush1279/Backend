import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: string,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: string,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: string,
        required: true,
        trim: true,
        index: true 
    },
    avatar: {
        type: string,   // cloudinary url
        required: true,
    },
    coverImage: {
        type: string,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }
}, {timestamps: true}
)

export const User = mongoose.model("User", userSchema)