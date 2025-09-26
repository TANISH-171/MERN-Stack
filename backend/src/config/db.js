import mongoose from "mongoose";
import 'dotenv/config';


const connectDB=async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
        
    } catch (error) {
        console.error("Error in DB connection",error);
    }
};
export {connectDB};