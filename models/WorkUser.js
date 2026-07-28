const mongoose = require("mongoose");
const { User } = require("../config/rolesLIst");

const workUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Manager: Number,
    Admin: Number,
  },
  joined: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
  workSettings: {
    exercise: {
      type: Array,
    },
    interval: {
      type: Number,
    },
    exercisesDuration: {
      type: Number,
    },
    numberOfRounds: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("WorkUserSchema", workUserSchema);
