const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

const Income = require('../models/Income');
const Expense = require('../models/Expense');
const Saving = require('../models/Saving');

// @desc      Get transactions filtering
// @route     GET /api/v1/search/:transactionType?query
// @access    Public
exports.queryFiltering = asyncHandler(async (req, res, next) => {

    const params = req.params.transactionType
    let reqQuery = req.query;
    
    const hasName = reqQuery.hasOwnProperty('name');
    const hasAmount = reqQuery.hasOwnProperty('amount');
    const hasday = reqQuery.hasOwnProperty('day');
    const hasMonth = reqQuery.hasOwnProperty('month');
    const hasYear = reqQuery.hasOwnProperty('year');
    const hasCategory = reqQuery.hasOwnProperty('category');
    const hasTransactionType = reqQuery.hasOwnProperty('transactionType');

    let name;
    let amount;
    let day;
    let month;
    let year;
    let category;
    let transactionType;

    if (params ===  'income') {
    
        if(hasName) {
            name = {
                name: {
                    $regex: `${req.query.name}`,
                    $options: 'i' 
                }
            } 
        }
        if(hasAmount) {
            amount = {
                amount: req.query.amount
            }
        } 
        if(hasday) {
            day = {
                "date.day": {
                    $regex: `${req.query.day}`,
                    $options: 'i' 
                }
            }
        } 
        if(hasMonth) {
            month = {
                "date.month": {
                    $regex: `${req.query.month}`,
                    $options: 'i' 
                }
            }
        } 
        if(hasYear) {
            year = {
                "date.year": {
                    $regex: `${req.query.year}`,
                    $options: 'i' 
                }
            }
        } 
        const query = Object.assign({}, name, amount, day, month, year); 
        
        const income = await Income.find(query);
        
        res.status(200).json({
            success: true, 
            count: income.length, 
            data: income
        });

    } else if (params ===  'expense') {
        if(hasName) {
            name = {
                name: {
                    $regex: `${req.query.name}`,
                    $options: 'i' 
                }
            } 
        }
        if(hasAmount) {
            amount = {
                amount: req.query.amount
            }
        } 
        if(hasday) {
            day = {
                "date.day": {
                    $regex: `${req.query.day}`,
                    $options: 'i' 
                }
            }
        } 
        if(hasMonth) {
            month = {
                "date.month": {
                    $regex: `${req.query.month}`,
                    $options: 'i' 
                }
            }
        } 
        if(hasYear) {
            year = {
                "date.year": {
                    $regex: `${req.query.year}`,
                    $options: 'i' 
                }
            }
        } 
        if(hasCategory) {
            category = {
                category: {
                    $regex: `${req.query.category}`,
                    $options: 'i' 
                }
            }
        } 
        const query = Object.assign({}, name, amount, day, month, year, category); 
        
        const expense = await Expense.find(query);
        
        res.status(200).json({
            success: true, 
            count: expense.length, 
            data: expense
        });
        
    } else if (params === 'saving') {

        if(hasName) {
            name = {
                name: {
                    $regex: `${req.query.name}`,
                    $options: 'i' 
                }
            } 
        }
        if(hasAmount) {
            amount = {
                amount: req.query.amount
            }
        } 
        if(hasday) {
            day = {
                "date.day": {
                    $regex: `${req.query.day}`,
                    $options: 'i' 
                }
            }
        } 
        if(hasMonth) {
            month = {
                "date.month": {
                    $regex: `${req.query.month}`,
                    $options: 'i' 
                }
            }
        } 
        if(hasYear) {
            year = {
                "date.year": {
                    $regex: `${req.query.year}`,
                    $options: 'i' 
                }
            }
        } 
        const query = Object.assign({}, name, amount, day, month, year); 
        const saving = await Saving.find(query);

        res.status(200).json({
            success: true, 
            count: saving.length, 
            data: saving
        });

    } else {
        if(hasName) {
            name = {
                name: {
                    $regex: `${req.query.name}`,
                    $options: 'i' 
                }
            } 
        }
        if(hasAmount) {
            amount = {
                amount: req.query.amount
            }
        } 
        if(hasday) {
            day = {
                "date.day": {
                    $regex: `${req.query.day}`,
                    $options: 'i' 
                }
            }
        } 

        if(hasMonth) {
            month = {
                "date.month": {
                    $regex: `${req.query.month}`,
                    $options: 'i' 
                }
            }
        } 

        if(hasYear) {
            year = {
                "date.year": {
                    $regex: `${req.query.year}`,
                    $options: 'i' 
                }
            }
        } 

        if(hasCategory) {
            category = {
                category: {
                    $regex: `${req.query.category}`,
                    $options: 'i' 
                }
            }
        }

        if(hasTransactionType) {
            transactionType = {
                transactionType: {
                    $regex: `${req.query.transactionType}`,
                    $options: 'i' 
                }
            }
        }

        const query = Object.assign({}, name, amount, day, month, year, category, transactionType); 

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