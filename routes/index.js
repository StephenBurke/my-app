var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bearcats' });
});

var dev = {
  firstName: "Stephen",
  lastName: "Burke",
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
}

module.exports = router;
