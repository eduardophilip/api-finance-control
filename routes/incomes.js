const express = require('express');
const { 
    getIncomes,
    getIncome,
    addIncome,
    editIncome,
    deleteIncome
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

module.exports = router;