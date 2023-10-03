const express = require("express");
const router = express.Router();

const apiRouter = require("./api");
const pageRouter = require("./pages");

// api routes
router.use("/api", apiRouter);
// page routes
router.use("/", pageRouter);

module.exports = router;
