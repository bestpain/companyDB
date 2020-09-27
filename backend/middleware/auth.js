const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const decodedUserId = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decodedUserId,
    });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send("Error: Authentication failed");
  }
};

module.exports = auth;
