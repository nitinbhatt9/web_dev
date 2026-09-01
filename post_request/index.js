import express from "express";

const app = express();

const PORT = 3000;
app.use(express.json());

// app.get("/my-new_project", (req, res) => {
//   res.send({
//     name: "nitin",
//   });
// });

// app.post("/register", (req, res) => {
//   const { email, password } = req.body;
//   if (!email) {
//     return res.status(400).json({ message: "Email Is Required" });
//   }
//   if (!password) {
//     return res.status(400).json({ message: "Pass Is Required", email });
//   }
//   res
//     .status(200)
//     .json({ message: "User Register Successfully", email, password });
// });

// get notes

const notes = [];

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "All notes",
    notes,
  });
});

app.post("/create", (req, res) => {
  const data = req.body;

  console.log(data);

  const a = notes.push(data);
  console.log("notes", notes);

  res.status(200).json({ message: " YOu Can Create notes", data });
});

app.listen(PORT, () => {
  console.log(`Server Initate on port http://localhost:${PORT}`);
});
