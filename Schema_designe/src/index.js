import express from "express";
import env from "node:process";
import connectDB from "../../database/src/config/database.js";
import dns from "node:dns/promises";
import authRoutes from "./routes/auth.routes.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = process.env.PORT || 3002;
app.use(express.json());
connectDB();

app.get("/mac", (req, res) => {
  res.json({ message: "Here your working Schema will be initated" });
});

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server Initate On this port http://localhost:${PORT}`);
});
