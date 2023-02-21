const express = require("express");

const {
    newUser, 
    getUser,
} = require("../controllers/userController");

const router = express.Router();

// Add user
router.post("/", newUser);

// Get user
router.get("/:_id", getUser);

module.exports = router;