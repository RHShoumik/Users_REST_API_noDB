const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Ragib Hassan",
        email: "rh@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Shoumik",
        email: "shoumik@gmail.com"
    },
];

module.exports = users;