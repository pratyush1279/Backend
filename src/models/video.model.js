import mongoose, {Schema} from 'mongoose'

const videoSchema = new Schema(
    {
        videofile: {   // cloudinary url
            type: String,
            required: true,
        },
        thumbnail: {    // cloudinary url
            type: String,
            required: true,
        },
        title: {        
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {     // cloudinary url
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

export const Video = mongoose.model("Video", videoSchema)