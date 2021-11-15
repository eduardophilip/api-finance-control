const asyncHandler = require('../middleware/asyncHandler');
const requestQuery = require('../middleware/queries');

const Income = require('../models/Income');
const Expense = require('../models/Expense');
const Saving = require('../models/Saving');

// @desc      Get transactions filtering
// @route     GET /api/v1/search/:transactionType?query
// @access    Public
exports.queryFiltering = asyncHandler(async (req, res, next) => {

    const params = req.params.transactionType
    let query = requestQuery(req.query);

    if (params ===  'income') {
        
        const income = await Income.find(query);
        
        res.status(200).json({
            success: true, 
            count: income.length, 
            data: income
        });

    } else if (params ===  'expense') {
        
        const expense = await Expense.find(query);
        
        res.status(200).json({
            success: true, 
            count: expense.length, 
            data: expense
        });
        
    } else if (params === 'saving') {

        const saving = await Saving.find(query);

        res.status(200).json({
            success: true, 
            count: saving.length, 
            data: saving
        });

    } else {

        const income = await Income.find(query);
        const expense = await Expense.find(query);
        const saving = await Saving.find(query);

        res.status(200).json({
            success: true,
            income: {
                count: income.length, 
                data: income
            },
            expense: {
                count: expense.length, 
                data: expense
            },
            saving: {
                count: saving.length, 
                data: saving
            }
        });

    }

});