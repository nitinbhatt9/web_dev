import express, { json } from "express";
import dotenv from "dotenv";
import connectionDB from "./config/database.js";
import noteRoute from "./routes/note_routes.js";
import multer from "multer";
import { uploadFileToImageKit } from "./services/storage.js";

dotenv.config();

const app = express();
const PORT = process.env.port || 3002;
app.use(express.json());

connectionDB();

const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("file"), async (req, res) => {
  console.log("1", req.file);
  console.log("2", req.body);
  const upload = await uploadFileToImageKit(
    req.file.buffer,
    req.file.originalname,
  );

  console.log("3", upload);

  res.json({ message: "File upload Successfully!" });
});

app.get("/", (req, res) => {
  res.json({ message: "Notes Server Initated" });
});

app.use("/api/v1/note", noteRoute);

app.listen(PORT, () => {
  console.log(`Server Is Initated On This Port http://localhost:${PORT}`);
});
