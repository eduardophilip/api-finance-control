const express = require('express');
const {
    getExpenses,
    getExpense,
    addExpense,
    editExpense,
    deleteExpense,
    getExpenseMonth,
    getExpenseYear
} = require('../controllers/expenses');
const router = express.Router();

const { protect } = require('../middleware/auth.middleware');

router
    .route('/')
    .get(protect, getExpenses)
    .post(protect, addExpense);

router.
    route('/:id')
    .get(protect, getExpense)
    .put(protect, editExpense)
    .delete(deleteExpense);

router
    .route('/date/month/:year/:month')
    .get(protect, getExpenseMonth);

router
    .route('/date/year/:year')
    .get(protect, getExpenseYear);

module.exports = router;