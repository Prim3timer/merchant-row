const User = require("../models/User");
const asyncHandler = require("express-async-handler");

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  console.log(users);
  if (users) {
    res.send(users);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const users = await User.find();
  const foundUser = users.find((user) => user._id == id);
  console.log({ foundUser });
  if (foundUser) {
    console.log({ id });
    await User.findByIdAndDelete(id);
    res.send("item deleted");
  }
});

module.exports = { getUsers, deleteUser };
