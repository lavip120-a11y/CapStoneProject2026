"use strict"; // when models folder is imported anywhere this code will automatically execute

const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");

//sequelise automatically creates the foreign keys!!!
Post.belongsTo(User);
User.hasMany(Post);
Comment.belongsTo(Post);
Post.hasMany(Comment);
Comment.belongsTo(User);
User.hasMany(Comment);
Like.belongsTo(Post);
Post.hasMany(Like);
Like.belongsTo(Comment);
Comment.hasMany(Like);
Like.belongsTo(User);
User.hasMany(Like);

// sync the model - creates the corresponding table in the database
async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
  await Like.sync();
}

init();

module.exports = {
  //exports the models
  User,
  Post,
  Comment,
  Like,
};
