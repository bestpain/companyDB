const express = require("express");
const router = new express.Router();
const {
  markFavouriteCompany,
  unmarkFavouriteCompany,
  getFavouriteCompany,
} = require("../controllers/user");
const auth = require("../middleware/auth");

router.get("/user/favourite", auth, getFavouriteCompany);
router.put("/user/mark/:companyId", auth, markFavouriteCompany);
router.put("/user/unmark/:companyId", auth, unmarkFavouriteCompany);

module.exports = router;
