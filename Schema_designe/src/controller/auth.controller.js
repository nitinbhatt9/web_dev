export const register = async (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ message: "User Register Successfully" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ message: "User logged in Successfully" });
};
