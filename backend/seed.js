import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/productModel.js"; // Adjust the path if needed
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const products = [
  {
    name: "Gaming Accessories",
    category: "Gaming",
    image: "URL_OF_IMAGE",
    price: 99.99,
    countInStock: 10,
    description: "High-quality gaming accessories.",
  },
  {
    name: "Gaming PC",
    category: "Gaming",
    image: "URL_OF_IMAGE",
    price: 1200.0,
    countInStock: 5,
    description: "RGB gaming PC with high performance.",
  },
  {
    name: "Office Supplies",
    category: "Stationery",
    image: "URL_OF_IMAGE",
    price: 49.99,
    countInStock: 15,
    description: "Complete office stationery set.",
  },
  {
    name: "Home Storage",
    category: "Home Essentials",
    image: "URL_OF_IMAGE",
    price: 30.0,
    countInStock: 20,
    description: "Elegant storage solutions for your home.",
  },
  {
    name: "Fashion",
    category: "Fashion",
    image: "URL_OF_IMAGE",
    price: 100,
    countInStock: 10,
    description: "High-quality clothes.",
  },
  {
    name: "Kitchen Accessories",
    category: "Kitchen",
    image: "URL_OF_IMAGE",
    price: 1200.0,
    countInStock: 5,
    description: "Standard quality kitchen products.",
  },
  {
    name: "Home Arrivals",
    category: "Home Essentials",
    image: "URL_OF_IMAGE",
    price: 49.99,
    countInStock: 15,
    description: "Complete home needs.",
  },
  {
    name: "Wireless Technology",
    category: "Wireless Tech",
    image: "URL_OF_IMAGE",
    price: 3000.0,
    countInStock: 20,
    description: "Stay ahead in the modern world.",
  },
];

const seedDatabase = async () => {
  try {
    await Product.deleteMany(); // Clears existing products
    await Product.insertMany(products);
    console.log("Database Seeded Successfully ✅");
    process.exit();
  } catch (error) {
    console.error("Error Seeding Database:", error);
    process.exit(1);
  }
};

seedDatabase();
