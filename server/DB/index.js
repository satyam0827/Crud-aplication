import mongoose  from "mongoose";
import {DB_NAME} from "../utils/constants/constants.js"

const connectDB= async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("You are now Connected to MonogoDB")
    } catch (error) {
        console.error("error in connecting to the database :", error);
        throw(error)
    }
}

export default connectDB