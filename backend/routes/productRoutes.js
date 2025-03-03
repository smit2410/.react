import express from "express";
import { getProducts, addProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);  // GET all products
router.post("/", addProduct);  // Add a new product

export default router;
