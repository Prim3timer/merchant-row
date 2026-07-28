const express = require("express");
const router = express.Router();
const { people } = require("../usersDB");
const userController = require("../controllers/userControllers");
const { route } = require("./registerRoute");

router.route("/").get(userController.getUsers);
router.route("/:id").delete(userController.deleteUser);

module.exports = router;
