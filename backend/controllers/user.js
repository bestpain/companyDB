const User = require("../models/user");

exports.getFavouriteCompany = (req, res) => {
  User.findById(req.user._id)
    .populate("favouriteCompany", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.status(201).json(result.favouriteCompany);
    });
};

exports.markFavouriteCompany = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $push: { favouriteCompany: req.params.companyId } },
    { new: true }
  )
    .populate("favouriteCompany", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.status(201).json(result.favouriteCompany);
    });
};

exports.unmarkFavouriteCompany = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $pull: { favouriteCompany: req.params.companyId } },
    { new: true }
  )
    .populate("favouriteCompany", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.status(201).json(result.favouriteCompany);
    });
};
