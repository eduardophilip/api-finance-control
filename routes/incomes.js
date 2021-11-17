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

const { protect } = require('../middleware/auth.middleware');

router
    .route('/')
    .get(protect, getIncomes)
    .post(protect, addIncome);

router
    .route('/:id')
    .get(protect, getIncome)
    .put(protect, editIncome)
    .delete(protect, deleteIncome);

router
    .route('/date/month/:year/:month')
    .get(protect, getIncomeMonth);

router
    .route('/date/year/:year')
    .get(protect, getIncomeYear);

module.exports = router;