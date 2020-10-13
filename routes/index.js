var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bearcats' });
});

router.get('/', (res) => {
    res.render('index', { dev: 'Stephen Burke' });
  });

module.exports = router;
