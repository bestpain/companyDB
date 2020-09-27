const User = require("../models/user");
const jwt = require("jsonwebtoken");
const accountVerification = require("../models/accountVerification");
const { resetPasswordMail } = require("../utils/emails/account");

exports.signUp = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists)
    return res.status(403).json({
      error: "Email is Taken",
    });
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).json({ message: "Signup sucessful! please login" });
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.json({
        error: "Email/Password does not match",
      });
    }
    if (!user.authenticate(password)) {
      return res.json({
        error: "Email/Password does not match",
      });
    }
    if (!user.active) {
      return res.json({ error: "Please Verify your email to signIn." });
    }
    // generate a token with user id and secret
    const token = user.generateAuthToken();
    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });
    // retrun response with user and token to client
    const { _id, userName, email } = user;
    return res.json({ token, user: { _id, email, userName } });
  });
};

exports.activateAccount = (req, res) => {
  const token = req.params.id;
  accountVerification.findOne({ token }, async (err, account) => {
    if (err || !account) {
      return res.status(401).json({
        error: "Invalid URL or token expired",
      });
    }
    try {
      await User.findByIdAndUpdate(account.accountId, { active: true });
      await accountVerification.deleteOne({ _id: account._id });
      return res.send(
        `Email Verified , <a href=${process.env.CLIENT_URL}/login>click to login</a> `
      );
    } catch (e) {
      res.status(400).send(e);
    }
  });
};

exports.forgotPassword = (req, res) => {
  if (!req.body) return res.status(400).json({ message: "No request body" });
  if (!req.body.email)
    return res.status(400).json({ message: "No Email in request body" });
  const { email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user)
      return res.status("401").json({
        error: "User with that email does not exist!",
      });

    const token = jwt.sign(
      { _id: user._id, is: "password" },
      process.env.JWT_SECRET
    );

    return user.updateOne({ resetPasswordLink: token }, (err, success) => {
      if (err) {
        return res.json({ message: err });
      } else {
        resetPasswordMail(token, user.userName, email);
        return res.status(200).json({
          message: `Email has been sent to ${email}. Follow the instructions to reset your password.`,
        });
      }
    });
  });
};

exports.resetPassword = (req, res) => {
  const { resetPasswordLink, password } = req.body;

  User.findOne({ resetPasswordLink }, async (err, user) => {
    if (err || !user)
      return res.status("401").json({
        error: "Invalid Link!",
      });
    const updatedFields = {
      hashed_password: user.encryptPassword(password),
      resetPasswordLink: "",
    };
    const updates = Object.keys(updatedFields);
    updates.forEach((update) => (user[update] = updatedFields[update]));
    await user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: `error while updating password`,
        });
      }
      res.json({
        message: `Password changed successfully.`,
      });
    });
  });
};
