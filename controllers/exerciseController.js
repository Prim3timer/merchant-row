const Exercise = require('../models/Exercise');
const asyncHandler = require('express-async-handler');

const addExercise = asyncHandler(async (req, res) => {
  const { name, calories } = req.body;
  console.log({ name, calories });
  const exercises = await Exercise.find()
const foundExercise = exercises.find(exercise => exercise.name == name)
  console.log({foundExercise})
  if (foundExercise){
    res.status(409).json("duplicate exercise")
  } else {
    const exercise = await Exercise.create(req.body);
    if (exercise){
      res.status(201).json("exercise created");
    }
  }
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