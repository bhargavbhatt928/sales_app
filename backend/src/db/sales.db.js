import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const salesDBconnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${DB_NAME}`
    );
  } catch (error) {
    console.log("MongoDB connection error:", error);
    exit(1);
  }
};
export default salesDBconnect;
