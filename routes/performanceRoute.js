const express = require("express");
const router = express.Router();

const performanceController = require("../controllers/performanceController");

router.route("/").post(performanceController.makeAnEntry);
router.route("/").get(performanceController.getDoings);
router.route("/:id").delete(performanceController.deleteEntry);

module.exports = router;
