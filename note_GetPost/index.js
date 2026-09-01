import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

const notes = [];

app.get("/note", (req, res) => {
  res.status(200).json({
    message: "All Notes",
    notes,
  });
});

app.post("/create", (req, res) => {
  const data = req.body;
  console.log(data);

  const a = notes.push(data);
  console.log("notes", notes);

  res.status(200).json({ message: "Here You Can Write Notes", data });
});

app.listen(PORT, () => {
  console.log(`Server Initate on port http://localhost:${PORT}`);
});
