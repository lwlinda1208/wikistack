const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
	console.log('dha');
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res, next) {

  res.send('got to GET /wiki/add');
});


module.exports = router;