const express = require('express');
const router = express.Router();
const plantCtrl = require('../../controllers/plants');

router.get('/search', plantCtrl.searchResults);
router.get('/plant/:plantId', plantCtrl.plantDetails);

module.exports = router;