const express = require("express");
const router = express.Router();
const {
  searchCompany,
  getAllComapanies,
  addcomp,
} = require("../controllers/company");

//get all comapanies data
router.get("/company", getAllComapanies);
//search company by keyword
router.get("/company/search", searchCompany);

module.exports = router;
