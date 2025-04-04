require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("./db/connect");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Optional but useful for frontend communication
app.use(express.json());

// MongoDB connection
connect();

// Basic route (optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
