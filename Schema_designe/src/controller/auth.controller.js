import Auth from "../schema/auth.schema.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("CREDS", email, password);

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }
    const isUserExists = await Auth.findOne({ email });
    console.log("USER", isUserExists);

    if (isUserExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new Auth({ email, password });
    console.log("User", newUser);

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json({ message: "User register successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const login = async (req, res) => {};
