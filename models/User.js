const mongoose = require("mongoose");
const { User } = require("../config/rolesLIst");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  roles: {
    USER: {
      type: Number,
      default: 2001,
    },
    Manager: Number,
    Admin: Number,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
  },
  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);
