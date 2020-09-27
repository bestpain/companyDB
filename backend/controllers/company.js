const Company = require("../models/company");

exports.searchCompany = (req, res) => {
  const keyword = req.query.term;
  const regex = new RegExp(`.*${keyword}.*`);
  const query = Company.find({ name: regex });
  query.exec((err, docs) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.status(200).json(docs);
  });
};

exports.getAllComapanies = async (req, res) => {
  Company.find({}, function (err, docs) {
    if (err || !docs) {
      return res.status(400).json({ error: "Error while fetching records" });
    }
    return res.status(200).json(docs);
  });
};
