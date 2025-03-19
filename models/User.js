const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;