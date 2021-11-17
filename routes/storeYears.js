const express = require('express');
const { 
    getYears,
    getYear,
    addYear,
    updateYear,
    deleteYear
 } = require('../controllers/storeYears.js');
const router = express.Router();

const { protect } = require('../middleware/auth.middleware');

router
    .route('/')
    .get(protect, getYears)
    .post(protect, addYear);

router
    .route('/:id')
    .get(protect, getYear)
    .put(protect, updateYear)
    .delete(protect, deleteYear);

module.exports = router;