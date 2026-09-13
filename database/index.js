import express from "express";
import connectDB from "./src/config/database.js";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.get("/ini", (req, res) => {
  res.json({ message: "Here your data is connected" });
});

app.listen(PORT, () => {
  console.log(`Server initate on this port http://localhost:${PORT}`);
});
