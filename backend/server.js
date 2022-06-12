const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const goalRoute = require("./routes/goal");
const userRoute = require("./routes/user");
const { errorHandler } = require("./middleware/error");
const connectDB = require("./config/db");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

// express.json & urlencoded is for Reading the body..
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// The routes
app.use("/api/goals", goalRoute);
app.use("/api/users", userRoute);

// Override the default Error handler for express
app.use(errorHandler);
