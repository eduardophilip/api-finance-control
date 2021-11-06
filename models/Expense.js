const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please add the transaction name'],
        maxlength: [30, 'The transaction name cant not be more than 30 characters']
    },
    slug: String,
    amount: {
        type: Number,
        required: [true, 'Please add the value to transaction']
    },
    category: {
        type: String,
        required: [true, 'Please add the category']
    },
    date:  {
        year: {
            type: String,
            required: true,
            maxlength: [4, 'Year can not be more than 4 characters']
        },
        month: {
            type: String,
            required: true,
            maxlength: [2, 'Month can not be more than 2 characters']
        },
        day: {
            type: String,
            required: true,
            maxlength: [2, 'Day can not be more than 2 characters']
        }
    },
    dateValue: {
        type: Date,
        required: [true, 'Please add a date']
    }
});

module.exports = mongoose.model('Expense', ExpenseSchema);