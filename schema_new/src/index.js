import express from "express";
import connectDB from "./config/database.js";
import authRoutes from "./routes/auth.routes.js";
// import dns from "node:dns/promises";

// dns.setServers(["1,1,1,1", "8,8,8,8"]);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "WELCOME YOU ARE CONNECTED TO MONGOOSEDB SERVER" });
});

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server Initates on port http://localhost:${PORT}`);
});
