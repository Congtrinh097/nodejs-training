import * as express from "express";
var router = express.Router();
var HomeController = require('../controllers/HomeController');

/* GET login. */
router.get('/login', HomeController.Login);

/* post login */
router.post('/login', HomeController.PostLogin);

router.get("/init-user", HomeController.InitUser);

module.exports = router;