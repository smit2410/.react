require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/productModel');

const insertData = async () => {
    try {
        await connectDB();  // Connect to MongoDB
        console.log("Connected to MongoDB");

        const sampleProducts = [
            { name: "Laptop", price: 799.99, image: "https://example.com/laptop.jpg" },
            { name: "Smartphone", price: 499.99, image: "https://example.com/smartphone.jpg" },
            { name: "Headphones", price: 99.99, image: "https://example.com/headphones.jpg" },
            { name: "Tablet", price: 299.99, image: "https://example.com/tablet.jpg" },
        ];

        await Product.insertMany(sampleProducts);
        console.log("Data inserted successfully");
        
        mongoose.connection.close(); // Close the connection
        console.log("MongoDB connection closed");
    } catch (error) {
        console.error("Error inserting data:", error);
    }
};

// Run the function
insertData();
