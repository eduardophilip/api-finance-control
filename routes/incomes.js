const express = require('express');
const { 
    getIncomes,
    getIncome,
    addIncome,
    editIncome,
    deleteIncome,
    getIncomeMonth,
    getIncomeYear
} = require('../controllers/incomes')

const router = express.Router();

router
    .route('/')
    .get(getIncomes)
    .post(addIncome);

router
    .route('/:id')
    .get(getIncome)
    .put(editIncome)
    .delete(deleteIncome);

router
    .route('/date/month/:month')
    .get(getIncomeMonth);

router
    .route('/date/year/:year')
    .get(getIncomeYear);

module.exports = router;