const Expense = require('../models/Expense');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// @desc      Get all expenses
// @route     GET /api/v1/expenses
// @access    Public
exports.getExpenses = asyncHandler(async (req, res, next) => {
    const expense = await Expense.find();

    res.status(200).json({
        success: true,
        count: expense.length,
        data: expense
    });
});

// @desc      Get single expense
// @route     GET /api/v1/expenses
// @access    Public
exports.getExpense = asyncHandler(async (req, res, next) => {

    const expense = await Expense.findById(req.params.id);

    if (!expense) {
        return next(new ErrorResponse(`Expense not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: expense
    }); 
});

// @desc      Add new expense
// @route     POST /api/v1/expenses
// @access    Private
exports.addExpense = asyncHandler(async (req, res, next) => {

    const expense = await Expense.create(req.body);

    res.status(201).json({
        success: true,
        data: expense
    })
});

// @desc      Edit expense
// @route     PUT /api/v1/expenses
// @access    Private
exports.editExpense = asyncHandler(async (req, res, next) => {

    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!expense) {
        return next(new ErrorResponse(`Expense to edit not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: expense
    });
});

// @desc      Delete expense
// @route     DELETE /api/v1/expenses
// @access    Private
exports.deleteExpense = asyncHandler(async (req, res, next) => {

    const expense = await Expense.findByIdAndDelete(req.params.id);

    if(!expense) {
        return next(new ErrorResponse(`Expense to delete not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: {}
    });
});

// @desc      Get all expense per month
// @route     GET /api/v1/expenses/date/month/:month
// @access    public
exports.getExpenseMonth = asyncHandler(async (req, res, next) => {
    const yearMonth = Object.values(req.params);

    const expense = await Expense.find({
        "date.year": `${yearMonth[0]}`, 
        "date.month": `${yearMonth[1]}`
    });

    res.status(200).json({
        success:true,
        count: expense.length,
        data: expense
    });
});

// @desc      Get all expense per year
// @route     GET /api/v1/expenses/date/year/:year
// @access    public
exports.getExpenseYear = asyncHandler(async (req, res, next) => {
    const year = Object.values(req.params);

    const expense = await Expense.find({"date.year": `${year}`});

    res.status(200).json({
        success:true,
        count: expense.length,
        data: expense
    });
});