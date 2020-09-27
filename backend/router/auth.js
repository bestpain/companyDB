const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  activateAccount,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const {
  userSignUpValidator,
  passwordValidator,
} = require("../utils/validators/auth");
const { runValidation } = require("../utils/validators");

router.post(
  "/user/signup",
  userSignUpValidator,
  passwordValidator,
  runValidation,
  signUp
);

router.post("/user/signin", signIn);
router.get("/activate/:id", activateAccount);
router.put("/user/forgot-password", forgotPassword);
router.patch(
  "/user/reset-password",
  passwordValidator,
  runValidation,
  resetPassword
);

module.exports = router;
