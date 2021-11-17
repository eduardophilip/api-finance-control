const Category = require('../models/Category');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// @desc      Get all categories
// @route     GET /api/v1/categories
// @access    Public
exports.getCategories = asyncHandler(async (req, res, next) => {

    const category = await Category.find({user: req.user}).populate({
        path: 'user',
        select: ' username'
    });
    
    res.status(200).json({
        success: true, 
        count: category.length, 
        data: category
    });
});

// @desc      Add new category
// @route     POST /api/v1/categories
// @access    Private
exports.addCategory = asyncHandler(async (req, res, next) => {

    const user = req.user

    const category = await Category.create({...req.body, user: user});

    res.status(201).json({
        success: true,
        data: category
    })

});

// @desc      Update category
// @route     PUT /api/v1/categories
// @access    Private
exports.updateCategory = asyncHandler(async (req, res, next) => {

    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!category) {
        return next(new ErrorResponse(`Category to update not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({success: true, data: category});

});

// @desc      Delete category
// @route     DELETE /api/v1/categories
// @access    Private
exports.deleteCategory = asyncHandler(async (req, res, next) => {

    const category = await Category.findByIdAndDelete(req.params.id);

    if(!category) {
        return next(new ErrorResponse(`Category to delete not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: {}
    })

});