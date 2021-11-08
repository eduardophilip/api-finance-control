const Income = require('../models/Income');
const ErrorResponse = require('../utils/errorResponse');

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
        next(err);
    }
}

// @desc      Get single income
// @route     GET /api/v1/incomes
// @access    Public
exports.getIncome = async (req, res, next) => {

    try {
        const income = await Income.findById(req.params.id);

        if(!income) {
            return next(new ErrorResponse(`Income not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true, 
            data: income
        });

    } catch(err) {
        next(err);
    }
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
        next(err);
    }

}

// @desc      Edit income
// @route     PUT /api/v1/incomes
// @access    Private
exports.editIncome = async (req, res, next) => {

    try {
        const income = await Income.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!income) {
            return next(new ErrorResponse(`Income to edit not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({success: true, data: income});

    } catch(err) {
        next(err);
    }

}

// @desc      Delete income
// @route     DELETE /api/v1/incomes
// @access    Private
exports.deleteIncome = async (req, res, next) => {

    try {
        const income = await Income.findByIdAndDelete(req.params.id);

        if(!income) {
            return next(new ErrorResponse(`Income to delete not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true,
            data: {}
        })

    } catch(err) {
        next(err);
    }

}