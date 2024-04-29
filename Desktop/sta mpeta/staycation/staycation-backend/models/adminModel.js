// adminModel.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add any other fields you need for admin
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
