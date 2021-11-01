const router = require("express").Router();
const {
  getSite,
  getAllSites,
  createSite,
  updateSite
} = require("../controllers/site.controller");
const verifyToken = require("../middleware/verifyToken");

router.route("/create").post(verifyToken, createSite);

router.route("/").get(verifyToken, getAllSites);

router.route("/:id").get(verifyToken, getSite).put(verifyToken, updateSite);

module.exports = router;
