const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    required: true,
    min: 5,
    max: 6,
  }
});

module.exports = mongoose.model('URL', urlSchema);
