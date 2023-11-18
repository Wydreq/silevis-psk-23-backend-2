const express = require("express");
const User = require("../models/User");
const { getUsers, createUser } = require("../controllers/users");
const router = express.Router();

router.route("/users").get(getUsers).post(createUser);

module.exports = router;
