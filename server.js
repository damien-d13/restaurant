const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const restaurantsRoutes = require("./routes/restaurant.routes"); 

const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API." });
});

// Use the routes
restaurantsRoutes(app); 

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
