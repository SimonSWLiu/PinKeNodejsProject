var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('customer/index');
});

router.get('/login', function(req, res, next) {
  res.render('customer/login');
});

router.get('/logout', function(req, res, next) {
  res.render('customer/logout');
});

router.get('/reg', function(req, res, next) {
  res.render('customer/reg');
});

module.exports = router;
