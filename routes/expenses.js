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

router
    .route('/')
    .get(getExpenses)
    .post(addExpense);

router.
    route('/:id')
    .get(getExpense)
    .put(editExpense)
    .delete(deleteExpense);

router
    .route('/date/month/:year/:month')
    .get(getExpenseMonth);

router
    .route('/date/year/:year')
    .get(getExpenseYear);

module.exports = router;