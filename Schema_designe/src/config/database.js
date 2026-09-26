import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("ENV.S", process.env.MONGOOSE_URI);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGOOSE_URI}`);
    console.log("DB code", connection.connection.host);
  } catch (error) {
    console.error(`Error:${error.message}`);
  }
};

export default connectDB;
