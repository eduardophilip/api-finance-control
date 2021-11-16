const express = require('express');
const { 
    getYears,
    getYear,
    addYear,
    updateYear,
    deleteYear
 } = require('../controllers/storeYears.js');
const router = express.Router();

router
    .route('/')
    .get(getYears)
    .post(addYear);

router
    .route('/:id')
    .get(getYear)
    .put(updateYear)
    .delete(deleteYear);

module.exports = router;