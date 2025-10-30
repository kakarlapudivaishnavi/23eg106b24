var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');

router.get('/', ctrlLocations.homelist);

module.exports = router;
