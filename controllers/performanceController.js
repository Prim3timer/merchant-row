const Workout = require("../models/Performance");
const asyncHandler = require("express-async-handler");
const { format } = require("date-fns");

const makeAnEntry = asyncHandler(async (req, res) => {
  console.log({ reqBody: req.body });
  const response = await Workout.create(req.body);

  res.json("work saved");
});

const getDoings = asyncHandler(async (req, res) => {
  const response = await Workout.find();
  const newResponse = response.map((item) => {
    const { duration, round, oneExercise, date } = item;
    return { duration, round, oneExercise, date: format(date, "dd/mm/yyyy") };
  });
  // console.log({ newResponse });
  console.log({ response });
  res.send(response);
});

const deleteEntry = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log({ id });
  if (!id) {
    res.status(400).json({ message: "id required" });
  }

  const entry = await Workout.findById(id).exec();
  if (!entry) {
    return res.status(400).json({ message: "no entry found" });
  }
  const result = await entry.deleteOne();
  const reply = `Entry deleted`;
  res.json(reply);
});
module.exports = {
  makeAnEntry,
  getDoings,
  deleteEntry,
};
