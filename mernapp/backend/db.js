const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/GoFood";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI,{useNewUrlParser:true});
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = mongoDB;