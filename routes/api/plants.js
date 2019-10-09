const express = require('express');
const router = express.Router();
const plantCtrl = require('../../controllers/plants');

router.get('/search', plantCtrl.searchResults);

module.exports = router;