const router = require("express").Router();
const { homePage } = require("../controllers/pageController");

// home page
router.get("/", homePage);

module.exports = router;
