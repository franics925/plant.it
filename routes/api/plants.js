const express = require('express');
const router = express.Router();
const plantCtrl = require('../../controllers/plants');

router.get('/search', plantCtrl.searchResults);
router.get('/plantDetails');

module.exports = router;