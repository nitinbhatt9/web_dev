import Auth from "../schema/Auth.schema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("CREDS", name, email, password);
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "name, email, password are required" });
    }
    const isUserExists = await Auth.findOne({ email });
    console.log("USER", isUserExists);
    if (isUserExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Auth({ name, email, password: hashedPassword });
    console.log("User", newUser);
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json({ message: "User register successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("LOGIN CREDS", email, password);

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await Auth.findOne({ email });
    console.log("USER FOUND", user);
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
