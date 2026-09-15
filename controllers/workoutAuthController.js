const WorkUserSchema = require("../models/WorkUser");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const handleLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await WorkUserSchema.findOne({ username }).exec();
  console.log({ foundUserVer: foundUser.verified });
  if (foundUser.verified === false) return res.status(401).json({message: "unverified"})
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "username and password are required" });
  if (!foundUser) return res.status(401).json({message: 'no such username'});
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) return res.status(401).json({ message: "unauthorized" });
  const roles = Object.values(foundUser.roles).filter(Boolean);
  console.log({ match });
  const name = foundUser.username;
  const id = foundUser._id;
  const verified = foundUser.verified;
  res.json({ roles, name, id, verified });
});

module.exports = {
  handleLogin,
};
