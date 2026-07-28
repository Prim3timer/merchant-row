const express = require("express");
const router = express.Router();

const workUserController = require("../controllers/workoutUserController");

router.route("/").get(workUserController.getWorkoutUsers);
router.route("/:id").patch(workUserController.editUserExercise);
router.route("/verification/:id").patch(workUserController.getUserVerified);
router.route("/reset-password/:id").patch(workUserController.resetPassword);
router.route("/delete/:id").delete(workUserController.deletUser);
router.route("/user-setting/:id").patch(workUserController.userSettingUpdate);

module.exports = router;
