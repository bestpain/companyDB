const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", function () {
  console.log("connection failed!");
});
db.once("open", function () {
  console.log("we are connected to DB!");
});
