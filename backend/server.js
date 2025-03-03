import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
app.use(express.json()); // Middleware for JSON parsing

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.error("MongoDB Connection Error:", error));

app.use("/api/products", productRoutes); // Use the product routes

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
