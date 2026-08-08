const mongoose = require("mongoose");

const performancechema = new mongoose.Schema({
  exerciseTimings: {
    type: Array,
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
  exerciseDets: {
    type: Array,
  },
  mark: {
    type: Number,
  },
});

module.exports = mongoose.model("Performance", performancechema);
