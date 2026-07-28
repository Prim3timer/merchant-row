const express = require("express");
const router = express.Router();

const workoutRegController = require("../controllers/workregController");

router.route("/").post(workoutRegController.createWorkoutUser);

module.exports = router;
