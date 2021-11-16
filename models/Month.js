const mongoose = require('mongoose');

const MonthSchema = new mongoose.Schema({

    abbreviation: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    }
});



module.exports = mongoose.model('Month', MonthSchema);