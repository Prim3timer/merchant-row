const mongoose = require("mongoose");

const performancechema = new mongoose.Schema({
  duration: {
    type: Number,
  },
  round: {
    type: Number,
  },
  oneExercise: {
    type: Number,
  },
  date: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  mark: {
    type: Number,
  },
});

module.exports = mongoose.model("Performance", performancechema);
