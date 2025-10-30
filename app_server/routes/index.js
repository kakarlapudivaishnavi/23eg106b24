const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');

router.get('/', ctrlLocations.homelist);
router.get('/about', ctrlLocations.about);

module.exports = router;
