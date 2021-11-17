const mongoose = require('mongoose');
const slugify = require('slugify');

const CategorySchema = new mongoose.Schema({

    category: {
        type: String,
        required: [true, 'Please add the category name'],
        maxlength: [30, 'The category name can not be more than 50 characters'] 
    },
    slug: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    }
});

CategorySchema.pre('save', function(next) {
    this.slug = slugify(this.category, {lower: true});
    next()
});

module.exports = mongoose.model('Category', CategorySchema);