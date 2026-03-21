const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/likes
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});

// matches POST requests sent to /api/likes/create
router.post("/create", (req, res) => {
  console.log("Received:", req.body);
  Controllers.likeController.createLike(req.body, res); //passing the body when using thunderclient
});

// matches PUT requests to /api/like/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  Controllers.likeController.updateLike(req, res);
});
// matches DELETE requests to /api/like/123 (123 in id param)
router.delete("/:id", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
