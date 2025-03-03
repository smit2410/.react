import Product from "../models/productModel.js";

// Get all products from Mongoose
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Add a new product
export const addProduct = async (req, res) => {
    const { title, price, image, category, description } = req.body;

    try {
        const newProduct = new Product({ title, price, image, category, description });
        const savedProduct = await newProduct.save();
        
        res.json({ message: "Product added", product: savedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error adding product" });
    }
};
