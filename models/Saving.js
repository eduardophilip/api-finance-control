const mongoose = require('mongoose');
const slugify = require('slugify');

const SavingSchema = new mongoose.Schema({

    name: {
        type: String,
        default: 'Savings'
    },
    transactionType: {
        type: String,
        default: 'Savings'
    },
    slug: String,
    amount: {
        type: Number,
        required: [true, 'Please add the value to transaction']
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
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    }
});

SavingSchema.pre('save', function(next) {
    this.slug = slugify(this.name, {lower: true});
    next()
});

module.exports = mongoose.model('Saving', SavingSchema);