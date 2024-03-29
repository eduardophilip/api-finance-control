const Income = require('../models/Income');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// @desc      Get all incomes
// @route     GET /api/v1/incomes
// @access    Public
exports.getIncomes = asyncHandler(async (req, res, next) => {

    const income = await Income.find({user: req.user}).populate({
        path: 'user',
        select: ' username'
    });

    res.status(200).json({
        success: true, 
        count: income.length, 
        data: income
    });
});

// @desc      Get single income
// @route     GET /api/v1/incomes
// @access    Public
exports.getIncome = asyncHandler(async (req, res, next) => {

    const income = await Income.findById(req.params.id).populate({
        path: 'user',
        select: ' username'
    });;

    if(!income) {
        return next(new ErrorResponse(`Income not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true, 
        data: income
    });
});

// @desc      Add new income
// @route     POST /api/v1/incomes
// @access    Private
exports.addIncome = asyncHandler(async (req, res, next) => {

    const user = req.user

    const income = await Income.create({...req.body, user: user});

    res.status(201).json({
        success: true,
        data: income
    })

});

// @desc      Edit income
// @route     PUT /api/v1/incomes
// @access    Private
exports.editIncome = asyncHandler(async (req, res, next) => {

    const income = await Income.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!income) {
        return next(new ErrorResponse(`Income to edit not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({success: true, data: income});

});

// @desc      Delete income
// @route     DELETE /api/v1/incomes/:id
// @access    Private
exports.deleteIncome = asyncHandler(async (req, res, next) => {

    const income = await Income.findByIdAndDelete(req.params.id);

    if(!income) {
        return next(new ErrorResponse(`Income to delete not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: {}
    })

});

// @desc      Get all income per month
// @route     GET /api/v1/incomes/date/month/:year/:month
// @access    public
exports.getIncomeMonth = asyncHandler(async (req, res, next) => {
    const yearMonth = Object.values(req.params);

    const income = await Income.find({
        "date.year": `${yearMonth[0]}`, 
        "date.month": `${yearMonth[1]}`,
        user: req.user
    }).populate({
        path: 'user',
        select: ' username'
    });

    res.status(200).json({
        success:true,
        count: income.length,
        data: income
    });
});

// @desc      Get all income per year
// @route     GET /api/v1/incomes/date/year/:year
// @access    public
exports.getIncomeYear = asyncHandler(async (req, res, next) => {
    const year = Object.values(req.params);

    const income = await Income.find({
        "date.year": `${year}`,
        user: req.user
    }).populate({
        path: 'user',
        select: ' username'
    });

    res.status(200).json({
        success:true,
        count: income.length,
        data: income
    });
});