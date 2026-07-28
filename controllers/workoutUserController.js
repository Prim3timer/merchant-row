const WorkoutUserSchema = require("../models/WorkUser");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const getWorkoutUsers = asyncHandler(async (req, res) => {
  const users = await WorkoutUserSchema.find();
  res.json(users);
});

const editUserExercise = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log({ editUserReqBody: req.body });

  const response = await WorkoutUserSchema.findOneAndUpdate(
    { _id: id },
    { workSettings: req.body },
  );
  if (response) return res.json("user exercise updated");
  else return res.json("no such user");
});

const getUserVerified = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const response = await WorkoutUserSchema.findOneAndUpdate(
    { _id: id },
    { verified: true },
  );
  res.json("you are now verified. you can now login with you credential");
});

const resetPassword = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { password } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);
  const response = await WorkoutUserSchema.findByIdAndUpdate(
    { _id: id },
    { password: hashedPwd, verified: true },
  );
  res.json("password reset");
});

const userSettingUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { username, roles, active } = req.body;
  const foundUser = await WorkoutUserSchema.findById(id).exec();
  console.log({ foundUser });
  console.log({ username, roles, active });
  const response = await WorkoutUserSchema.findOneAndUpdate(
    { _id: id },
    {
      username,
      roles: roles === undefined ? foundUser.roles : roles,
      active,
    },
  );
  if (response) {
    res.json("user updated");
  }
});

const deletUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "user ID required" });
  }
  const results = await WorkoutUserSchema.findByIdAndDelete(id).exec();

  if (!results) {
    return res.status(400).json({ message: "Item not found" });
  }
  const result = await WorkoutUserSchema.deleteOne({ _id: id });
  const reply = `${result.username} deleted`;
});

module.exports = {
  getWorkoutUsers,
  editUserExercise,
  getUserVerified,
  resetPassword,
  deletUser,
  userSettingUpdate,
};
