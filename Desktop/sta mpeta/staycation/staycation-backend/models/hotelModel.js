// hotelModel.js
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  // Add other fields such as description, images, amenities, etc.
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
