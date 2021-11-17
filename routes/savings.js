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

const { protect } = require('../middleware/auth.middleware');

router
    .route('/')
    .get(protect, getSavings)
    .post(protect, addSaving);

router.
    route('/:id')
    .get(protect, getSaving)
    .put(protect, editSaving)
    .delete(protect, deleteSaving);

router
    .route('/date/month/:year/:month')
    .get(protect, getSavingMonth);

router
    .route('/date/year/:year')
    .get(protect, getSavingYear);

module.exports = router;