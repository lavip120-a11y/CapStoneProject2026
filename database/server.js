const express = require("express"); //import express
const cors = require("cors");
const app = express(); //call express
require("dotenv").config(); //to access .env information to run
let dbConnect = require("./dbConnect");
let userRoutes = require("./routes/userRoutes");
let postRoutes = require("./routes/postRoutes");
let commentRoutes = require("./routes/commentRoutes");
let likeRoutes = require("./routes/likeRoutes");

// parse requests of content-type - application/json
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Capstone Project Database application." }); //testing
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
