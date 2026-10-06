import mongoose, { Schema } from "mongoose";

const authSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Auth = mongoose.model("Auth", authSchema);

export default Auth;
