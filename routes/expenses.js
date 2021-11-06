const express = require('express');
const {
    getExpenses,
    getExpense,
    addExpense,
    editExpense,
    deleteExpense
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

module.exports = router;