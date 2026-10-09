const Exercise = require('../models/Exercise');
const asyncHandler = require('express-async-handler');

const addExercise = asyncHandler(async (req, res) => {
  const { name, calories } = req.body;
  console.log({ name, calories });
  const exercise = await Exercise.create(req.body);
  res.status(201).json(exercise);
});

const getExercises = asyncHandler(async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

const deleteEntry = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findByIdAndDelete(req.params.id);
  if (!exercise) {
    return res.status(404).json({ message: 'Exercise not found' });
  }
  res.json({ message: 'Exercise deleted successfully' });
});

module.exports = {
  addExercise,
  getExercises,
  deleteEntry
};