var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET list pet */
router.get('/list', function(req, res, next) {
  res.render('list', { title: 'List your pets' });
});

/* GET list pet */
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Add  new pet' });
});


/* post login */
router.post('/login', function(req, res, next) {
  res.render('list', { title: 'List your pets' });
});

module.exports = router;
