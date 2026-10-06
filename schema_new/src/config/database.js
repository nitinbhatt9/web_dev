import mongoose from "mongoose";
import dotnev from "dotenv";

dotnev.config();

console.log(process.env.MONGOOSE_URI);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOOSE_URI);
    console.log(`MongoDB connected : ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error : ${error.message}`);
  }
};

export default connectDB;
