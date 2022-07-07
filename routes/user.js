const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/user.js");
const { test } = require("../controllers/testCont.js");

router.get("/test", test);
router.post("/signup", signup);

module.exports = router;
