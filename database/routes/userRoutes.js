const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/user (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
  console.log("Received:", req.body);
  Controllers.userController.createUser(req.body, res); //passing the body for testing post method when using thunderclient
});

//sign in.jsx calls api/user/login
router.post("/login", (req, res) => {
  Controllers.userController.loginUser(req.body, res);
});

// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});
// matches DELETE requests to /api/users/123 (123 in id param)
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
