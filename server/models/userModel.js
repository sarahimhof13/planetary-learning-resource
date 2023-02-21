const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema for users
const userSchema = new Schema({
    username: {
        type: String,
    }, 
    password: {
        type: String,
    }, 
    first_name: {
        type: String, 
    }, 
    last_name: {
        type: String, 
    },
})

module.exports = mongoose.model("User", userSchema, 'Users');