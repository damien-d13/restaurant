const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/restaurant", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to the database!");
  } catch (err) {
    console.error("Cannot connect to the database!", err);
    throw err;
  }
};

module.exports = connectDB;
