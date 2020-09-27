const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const accountVerificationSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  accountId: {
    type: ObjectId,
    required: true,
    ref: "Users",
  },
});

//create model from Schema
const accountVerification = mongoose.model(
  "accountVerifications",
  accountVerificationSchema
);
module.exports = accountVerification;
