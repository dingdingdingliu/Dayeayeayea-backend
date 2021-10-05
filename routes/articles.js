var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const status = 200
  const message = 'Hello, This is user !'
  return res.status(status).json({status, message})
});

module.exports = router;
