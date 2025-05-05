require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const AuthRouter = require('./Routes/AuthRouter');
require("./Models/db"); // MongoDB connection

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Setup CORS BEFORE routes
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:5173', // frontend port
  credentials: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// ✅ Middleware
app.use(express.json()); // Built-in JSON parser (no need for body-parser in most cases)
app.use(bodyParser.json()); // (optional if express.json() handles everything)

// ✅ Routes
app.get("/ping", (req, res) => {
  res.status(200).send("Hello World");
});
app.use('/auth', AuthRouter); // Signup & Login routes

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
