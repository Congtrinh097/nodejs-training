var express = require('express');
var router = express.Router();
var PetsController = require('../controllers/PetsController');
/* GET list pet */
router.get('/list', PetsController.list);

/* add a pet */
router.get('/add',PetsController.create);

/* save a pet */
router.post('/add', PetsController.save);
/* edit a pet*/

router.get('/edit/:id', PetsController.update);

// Get single pet by id
router.get('/show/:id', PetsController.show);

module.exports = router;
