const express = require("express");
const router = express.Router();
const { userSignupValidator } = require("../validator/index.js");

const { signup } = require("../controllers/user.js");
const { test } = require("../controllers/testCont.js");

router.get("/test", test);
router.post("/signup", userSignupValidator, signup);

module.exports = router;
