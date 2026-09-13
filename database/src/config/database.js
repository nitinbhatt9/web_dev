import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("ENV.S", process.env.MONGOOSE_URI);
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      //   `${process.env.MONGOOSE_URI}/${process.env.DATABASENAME}`,
      "mongodb+srv://nitinmohanbhatt_db_user:9IlRHDz39tUEMu1S@nitin.stgkkgi.mongodb.net/DATA",
    );
    console.log("connect DB code");
  } catch (error) {
    console.error(`Error:${error.message}`);
  }
};

export default connectDB;
