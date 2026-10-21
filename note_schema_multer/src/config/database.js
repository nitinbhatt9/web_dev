import mongoose from "mongoose";
import dotenv from "dotenv";

console.log("env", process.env.DATABASE_URI);

dotenv.config();

const connectionDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.DATABASE_URI}${process.env.DATABASENAME}`,
    );
  } catch (error) {
    console.error("error", error);
  }
};

export default connectionDB;
