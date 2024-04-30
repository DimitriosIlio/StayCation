// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  profilePicture: { type: String },
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
