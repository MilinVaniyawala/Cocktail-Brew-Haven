const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

// Home page router
router.get("/", indexController.getIndex);

module.exports = router;
