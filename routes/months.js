const express = require('express');
const { 
    getMonths,
    getMonth
} = require('../controllers/months.js');
const router = express.Router();

const { protect } = require('../middleware/auth.middleware');

router
    .route('/')
    .get(protect, getMonths);

router
    .route('/:abbreviation')
    .get(protect, getMonth);

module.exports = router;