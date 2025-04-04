const express = require("express");
const router = express.Router();
const {
  loginUser,
  signupUser,
  logout,
  checkAuth,
} = require("../controllers/userController");
const {requireAuth} = require("../middleware/auth.middleware");

//login
router.post("/login", loginUser);

//signup
router.post("/signup", signupUser);

//logout
router.post("/logout", logout);

//checkAuth
router.get("/check", requireAuth, checkAuth);

module.exports = router;
