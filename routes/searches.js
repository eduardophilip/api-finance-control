const express = require('express');
const { queryFiltering } = require('../controllers/searches.js');
const router = express.Router();

router
    .route('/:transactionType?')
    .get(queryFiltering);

module.exports = router;