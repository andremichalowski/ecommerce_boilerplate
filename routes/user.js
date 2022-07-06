const express = require('express');
const router = express.Router();

const { sayHi } = require('../controllers/user.js');

router.get('/say', sayHi)

module.exports = router;