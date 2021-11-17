const mongoose = require('mongoose');

const StoreYearSchema = new mongoose.Schema({

    year: {
        type: String,
        required: true,
        maxlength: [4, 'The year can not be more than 4 characters'] 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    }
});

module.exports = mongoose.model('Year', StoreYearSchema);