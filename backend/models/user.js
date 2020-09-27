const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const accountVerification = require("./accountVerification");
const { userVerificationMsg } = require("../utils/emails/account");
const { ObjectId } = mongoose.Schema;

//user schema
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  salt: String,
  active: {
    type: Boolean,
    default: false,
  },
  resetPasswordLink: {
    data: String,
    default: "",
  },
  favouriteCompany: [{ type: ObjectId, ref: "companies" }],
});

// virtual field named password
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    // generate a timestamp
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },

  generateAuthToken: function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {});
    return token;
  },
};

//middleware to add verification token document for accountVerification Schema
userSchema.post("save", async function () {
  if (!this.active) {
    const newAccountVerfication = new accountVerification({
      accountId: this._id,
    });
    newAccountVerfication.token = crypto
      .createHmac("sha1", newAccountVerfication.accountId.toString())
      .digest("hex");
    await newAccountVerfication.save();
    userVerificationMsg(this.email, this.userName, newAccountVerfication.token);
  }
});

//create model from Schema
const User = mongoose.model("users", userSchema);
module.exports = User;
