// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add any other fields you need (e.g., name, profile picture, etc.)
});

const User = mongoose.model('User', userSchema);

module.exports = User;
