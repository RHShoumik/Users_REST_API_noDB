let users = require("../models/users.model")
const { v4: uuidv4 } = require("uuid");

//get Users
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

//create Users
const createUsers = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(users);
};

//update User
const updateUser = (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    users.filter((user) => user.id === userId).map((filterUser) => {
        filterUser.username = username;
        filterUser.email = email;
    })
    res.status(200).json(users)
}

//delete User
const deleteUser = (req, res) => {
    const userId = req.params.id;
    users = users.filter((user) => user.id !== userId);
    res.status(200).json(users);
}

module.exports = { getAllUsers, createUsers, updateUser, deleteUser };