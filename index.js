const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//Import Routes

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// Connect to database
connectDB();

//Middleware

app.use(express.json());

//Route Middleware

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

// Constants
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";

// How to we start listining to the server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
