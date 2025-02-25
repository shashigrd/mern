const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth-controller");
// require('../db/connect');
// const User = require('../model/userSchema');

router.get("/", controller.home);
router.route("/register").post(controller.register);
router.route("/login").post(controller.login);
router.route("/contact").post(controller.contact);

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  const user = new User({ name, email, phone, work, password, cpassword });
  user
    .save()
    .then(() => {
      res.status(201).json({ msg: "user register successfully" });
    })
    .catch((err) => res.send("register err:::", err));
});

router.get("/users", (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.send(err);
    }
    res.status(200).json(users);
  });
});

module.exports = router;
