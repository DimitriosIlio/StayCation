// DataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // Define the fields for your Data entity
  // For example:
  name: { type: String, required: true },
  description: { type: String },
  // Add more fields as needed
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
