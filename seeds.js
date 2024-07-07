const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const User = require("./models/User.js");
require('dotenv').config();
mongoose
  .connect(process.env.uri)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

  
const preprocessData = (data) => {
  return data.map((item) => {
    if (item._id && item._id.$oid) {
      item._id = item._id.$oid;
    }
    if (item.createdAt && item.createdAt.$date) {
      item.createdAt = new Date(item.createdAt.$date);
    }
    if (item.updatedAt && item.updatedAt.$date) {
      item.updatedAt = new Date(item.updatedAt.$date);
    }
    return item;
  });
};

const productFilePath = path.join(__dirname, "auth.users.json");
const rawProductData = fs.readFileSync(productFilePath, "utf-8");
const productsData = preprocessData(JSON.parse(rawProductData));

const seedDatabase = async () => {
  try {
    
    await User.insertMany(productsData);
    console.log("Product database seeding successful");
  } catch (err) {
    console.error("Database seeding error:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
