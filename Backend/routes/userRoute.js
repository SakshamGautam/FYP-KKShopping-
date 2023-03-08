const express = require("express");
const {
  registerUser,
  loginuser,
  logout,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginuser);

router.route("/logout").get(logout);

module.exports = router;
