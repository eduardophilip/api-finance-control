const express = require('express');
const { 
    getMonths,
    getMonth
} = require('../controllers/months.js');
const router = express.Router();

router
    .route('/')
    .get(getMonths);

router
    .route('/:abbreviation')
    .get(getMonth);

module.exports = router;