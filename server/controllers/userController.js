const User = require("../models/userModel");
const mongoose = require("mongoose");

// Create a new user
const newUser = async (req, res) => {
    const {
        username,
        password,
        first_name,
        last_name,
    } = req.body;

    try {
        const user = await User.create({
            username,
            password,
            first_name,
            last_name,
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a user 
const getUser = async (req, res) => {
    const { _id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ error: "user does not exist" });
    }
  
    const user = await User.findById(_id);
  
    res.status(200).json(user);
  };

module.exports = {
    newUser,
    getUser,
};