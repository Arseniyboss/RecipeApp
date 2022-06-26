import express from "express";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/database.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

await connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/recipes", recipeRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
