const express = require("express");
const router = express.Router();
const workoutAuthController = require("../controllers/workoutAuthController");

router.route("/").post(workoutAuthController.handleLogin);

module.exports = router;
