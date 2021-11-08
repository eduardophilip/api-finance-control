const Expense = require('../models/Expense')

// @desc      Get all expenses
// @route     GET /api/v1/expenses
// @access    Public
exports.getExpenses = async (req, res, next) => {
    
    try {
        const expense = await Expense.find();
    
        res.status(200).json({
            success: true,
            count: expense.length,
            data: expense
        });
    } catch(err) {
        res.status(400).json({success: false});
        console.log(err);
    }

}

// @desc      Get single expense
// @route     GET /api/v1/expenses
// @access    Public
exports.getExpense = async (req, res, next) => {
    
    try {
        const expense = await Expense.findById(req.params.id);

        if (!expense) {
            res.status(400).json({
                success: false,
                msg: 'Expense not found'
            });
        }

        res.status(200).json({
            success: true,
            data: expense
        }); 
    } catch {
        res.status(400).json({success: false});
        console.log(err);
    }

}

// @desc      Add new expense
// @route     POST /api/v1/expenses
// @access    Private
exports.addExpense = async (req, res, next) => {
    
    try {
        const expense = await Expense.create(req.body);

        res.status(201).json({
            success: true,
            data: expense
        })
    } catch(err) {
        res.status(400).json({success: false});
        console.log(err);
    }

}

// @desc      Edit expense
// @route     PUT /api/v1/expenses
// @access    Private
exports.editExpense = async (req, res, next) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!expense) {
            res.status(400).json({
                success: false,
                msg: 'Expense to edit not found'
            });
        }

        res.status(200).json({
            success: true,
            data: expense
        })

    } catch(err) {
        res.status(400).json({success: false})
        console.log(err);
    }
}

// @desc      Delete expense
// @route     DELETE /api/v1/expenses
// @access    Private
exports.deleteExpense = async (req, res, next) => {

    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);

        if(!expense) {
            return res.status(400).json({
                    success: false,
                    msg: 'Expense to delete not found'
            });
        }

        res.status(200).json({
            success: true,
            data: {}
        })

    } catch(err) {
        res.status(400).json({success: false})
        console.log(err);
    }

} 