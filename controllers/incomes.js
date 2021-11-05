const Income = require('../models/Income')

// @desc      Get all incomes
// @route     GET /api/v1/incomes
// @access    Public
exports.getIncomes = async (req, res, next) => {

    try {
        const income = await Income.find()
        res.status(200).json({
            success: true, 
            count: income.length, 
            data: income
        });
    } catch(err) {
        res.status(400).json({success: false});
        console.log(err);
    }
}

// @desc      Get single income
// @route     GET /api/v1/incomes
// @access    Public
exports.getIncome = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show single income'});
}

// @desc      Add new income
// @route     POST /api/v1/incomes
// @access    Private
exports.addIncome = async (req, res, next) => {

    try {
        const income = await Income.create(req.body);

        res.status(201).json({
            success: true,
            data: income
        })
    } catch(err) {
        res.status(400).json({success: false})
        console.log(err);
    }

}

// @desc      Edit income
// @route     PUT /api/v1/incomes
// @access    Private
exports.editIncome = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Edit income'});
}

// @desc      Delete income
// @route     DELETE /api/v1/incomes
// @access    Private
exports.deleteIncome = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Delete income'});
}