import Auth from "../schema/auth.schema.js";

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
    const newUser = new Auth({ name, email, password });
    console.log("NEW_DB", newUser);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error occured during registrtion" });
  }
};
