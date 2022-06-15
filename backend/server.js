const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const goalRoute = require("./routes/goal");
const userRoute = require("./routes/user");
const { errorHandler } = require("./middleware/error");
const connectDB = require("./config/db");
const path = require("path");

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

// Serve frontend, production stuff
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

// Override the default Error handler for express
app.use(errorHandler);
