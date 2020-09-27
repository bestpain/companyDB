const { check } = require("express-validator");

exports.userSignUpValidator = [
  check("userName").not().isEmpty().withMessage("Name is Required"),

  check("email")
    .isLength({
      min: 3,
      max: 32,
    })
    .withMessage("Email must be of length between 3 to 32 characters"),
  check("email").isEmail().withMessage("Email is not valid"),
];

exports.passwordValidator = [
  check("password").not().isEmpty().withMessage("Password is required"),
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password must be atleast of 6 characters"),
  check("password").matches(/\d/).withMessage("Password must contain a number"),
];
