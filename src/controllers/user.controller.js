import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"

const registerUser = asyncHandler( async (req, res) => {
    // get the user details
    // validation - non empty
    // check if  user already exists or not : username, email
    // upload the image 
    // check the uploaded image on cloudinary - avatar
    // create user object - create entry in db
    // check for user creation
    // return res


    const {fullName, email, username, password}  =  req.body
    console.log("email:", email)

    // Step 2 Validation

    if ([fullName, email, username, password].some((field) => field.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
} )



export {registerUser}