import Auth from "../schema/auth.schema.js";

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
    res.status(201).json({ message: "User register successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error occurred while registering user" });
  }
};

export const login = async (req, res) => {
  //   try{
  //     // 1. take request from body
  //     const { email, password } = req.body;
  //     console.log("CREDS", email, password);
  //     // 2. check whether user is passing required data
  //     if (!email || !password) {
  //       return res
  //         .status(400)
  //         .json({ message: "email and password are required" });
  //     }
  //     // 3. check if user exists in DB
  //     const isUserExists = await Auth.findOne({ email });
  //     console.log("USER", isUserExists);
  //     if (isUserExists){
  //       return res.status(400).json({message: "User already exists"});
  //     }
  //   }
};
