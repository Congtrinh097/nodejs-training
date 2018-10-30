var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/HomeController');
/* GET home page. */
router.get('/', HomeController.Index);

/* GET home page. */
router.get('/index', HomeController.Index);
router.get('/logout', HomeController.Logout);
module.exports = router;
