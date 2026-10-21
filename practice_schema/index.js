import express from "express";
import connectDB from "./src/config/database.js";
import authRoutes from "./src/routes/pro_routes.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

connectDB();

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server Initiated On This Port http://localhost:${PORT}`);
});
