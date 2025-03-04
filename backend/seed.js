import mongoose from "mongoose";
import Product from "./models/productModel.js";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const products = [
  {
    name: "Gaming Accessories",
    category: "Gaming",
    images: [
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
    ],
    price: 99.99,
    countInStock: 10,
    description: "High-quality gaming accessories including controllers, headsets, and keyboards.",
  },
  {
    name: "Gaming PC",
    category: "Gaming",
    images: [
      "https://www.pcworld.com/wp-content/uploads/2024/04/pcw08_Asus-Gaming-PC.jpg"
    ],
    price: 1200.0,
    countInStock: 5,
    description: "RGB gaming PC with high performance.",
  },
  {
    name: "Office Supplies",
    category: "Stationery",
    images: [
      "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1555947_2997386_379x304_1X_en_US._SY304_CB594429819_.jpg"
    ],
    price: 49.99,
    countInStock: 15,
    description: "Complete office stationery set.",
  }
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Database Seeded! 🌱");
  mongoose.connection.close();
};

seedDB();
