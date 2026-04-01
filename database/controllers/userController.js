"use strict";
const Models = require("../models");

// finds all users in DB, then sends array as response
const getUsers = (res) => {
  Models.User.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to create new user in DB
const createUser = (data, res) => {
  Models.User.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to update user ID from params
const updateUser = (req, res) => {
  Models.User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// deletes user matching ID from params
const deleteUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// user login, checking if user exists and if the password matches
const loginUser = async (data, res) => {
  //expecting data to be email and password
  console.log("Received body:", data); //debugging
  const { email, password } = data;

  try {
    const user = await Models.User.findOne({ where: { email } }); //checking the user model to see if the email matches

    if (!user) {
      return res.status(401).send({ result: 401, message: "User not found" }); //error message if email does not match
    }
    //checking the password to see if it matches
    if (user.password !== password) {
      return res
        .status(401)
        .send({ result: 401, message: "Incorrect password" }); //error message if it doesnt match
    }
    //successful login, returns user
    res.send({ result: 200, user });
  } catch (err) {
    console.log(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};
