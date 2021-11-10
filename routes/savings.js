const express = require('express');
const {
    getSavings,
    getSaving,
    addSaving,
    editSaving,
    deleteSaving,
    getSavingMonth,
    getSavingYear
} = require('../controllers/savings');
const router = express.Router();

router
    .route('/')
    .get(getSavings)
    .post(addSaving);

router.
    route('/:id')
    .get(getSaving)
    .put(editSaving)
    .delete(deleteSaving);

router
    .route('/date/month/:month')
    .get(getSavingMonth);

router
    .route('/date/year/:year')
    .get(getSavingYear);

module.exports = router;