const mongoose = require("mongoose");

const improvementSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  clubType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.Schema("Improvement", improvementSchema);
