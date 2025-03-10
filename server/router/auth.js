const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth-controller");
// require('../db/connect');
// const User = require('../model/userSchema');
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", controller.home);
router.route("/register").post(controller.register);
router.route("/login").post(controller.login);
router.route("/contact").post(controller.contact);
router.route("/users").get(authMiddleware, controller.users);
router.route("/user/edit/:id").get(authMiddleware, controller.getUserById);
router.route("/user/update").patch(authMiddleware, controller.updateUserById);

module.exports = router;
