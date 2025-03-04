import express from "express";
import { getProducts } from "../controllers/productController.js"; // Ensure correct import

const router = express.Router(); // Define router before using it

router.get("/", getProducts);

export default router; // Use default export since you're using ES modules
