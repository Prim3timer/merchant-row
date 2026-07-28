const asyncHandler = require("express-async-handler");
const WorkUserSchema = require("../models/WorkUser");
const bcrypt = require("bcrypt");

const createWorkoutUser = asyncHandler(async (req, res) => {
  const { username, email, password, joined } = req.body;
  console.log({ reqBody: req.body });
  if (!username || !password || !email) {
    return res.status(400).json({ message: "all fields are required" });
  }
  const duplicate = await WorkUserSchema.findOne({ email }).exec();
  if (duplicate) return res.sendStatus(409);

  const hashedPassword = await bcrypt.hash(password, 10);
  const response = await WorkUserSchema.create({
    username,
    password: hashedPassword,
    email,
    joined,
  });
  res.json({ message: "user created" });
});

module.exports = {
  createWorkoutUser,
};
