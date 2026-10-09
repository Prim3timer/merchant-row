const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: false
  },

});

module.exports = mongoose.model('Exercise', exerciseSchema);