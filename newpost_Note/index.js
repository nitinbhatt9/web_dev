import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

const PhoneDir = [];

app.get("/dir", (req, res) => {
  res.status(200).json({
    message: "All Details",
    PhoneDir,
  });
});

app.post("/dor", (req, res) => {
  const data = req.body;
  console.log(data);

  const a = PhoneDir.push(data);
  console.log("PhoneDir", PhoneDir);

  res
    .status(200)
    .json({ messgae: "Here You Can Write Phone Directories ", data });
});

app.listen(PORT, () => {
  console.log(`Server Initate on port http://localhost:${PORT}`);
});
