var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');

/* GET home page */
router.get('/', ctrlLocations.homelist);

module.exports = router;
