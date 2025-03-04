import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  images: [{ type: String, required: true }],  // ✅ Allow multiple images
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
