var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/HomeController');
/* GET home page. */
router.get('/', HomeController.Index);

/* GET home page. */
router.get('/index', HomeController.Index);
/* GET login. */
router.get('/login', HomeController.Login);

/* post login */
router.post('/login', HomeController.PostLogin);

module.exports = router;
