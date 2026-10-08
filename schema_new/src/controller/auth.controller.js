import Auth from "../schema/auth.schema.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("CREDS", name, email, password);

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "name, email and password are required" });
    }
    const isUserExits = await Auth.findOne({ email });
    console.log("UESR_DB", isUserExits);
    if (isUserExits) {
      return res.status(400).json({ message: "User already eixsts" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new Auth({ name, email, password: hashpassword });
    console.log("NEW_DB", newUser);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error occured during registrtion" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // CREDS = Credential
    console.log("CREDS", email, password);

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }
    const isUserExits = await Auth.findOne({ email });
    console.log("USER_DB", isUserExits);
    if (!isUserExits) {
      return res.status(400).json({ message: "User not exists" });
    }

    const ismatch = await bcrypt.compare(password, isUserExits.password);

    if (!ismatch) {
      return res.status(400).json({ message: "password is incorrect" });
    }
    res.status(200).json({ message: "user login successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error occured during login" });
  }
};
