import * as express from "express";
import Auth from "../auth";
var router = express.Router();
var HomeController = require('../controllers/HomeController');
/* GET home page. */
router.get('/', HomeController.Index);

/* GET home page. */
router.get('/index', Auth.requiredLogin, HomeController.Index);
router.get('/logout',  Auth.requiredLogin, HomeController.Logout);
module.exports = router;
