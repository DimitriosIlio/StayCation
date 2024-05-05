// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  profilePicture: { type: String },
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
