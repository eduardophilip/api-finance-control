const express = require('express');
const { queryFiltering } = require('../controllers/searches.js');
const router = express.Router();

const { protect } = require('../middleware/auth.middleware');

router
    .route('/:transactionType?')
    .get(protect, queryFiltering);

module.exports = router;