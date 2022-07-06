const express = require('express');
const router = express.Router()

router.get('/', (req, res)=> {
  res.send(`Res sent from user.js updated ${Date().toLocaleString()}`);

})

module.exports = router;