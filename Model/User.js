const mongoose = require("mongoose");

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the User Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetLink: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", UserSchema); // exporting the model
