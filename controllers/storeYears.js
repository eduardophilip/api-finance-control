const StoreYear = require('../models/StoreYear');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// @desc      Get all years
// @route     GET /api/v1/years
// @access    Public
exports.getYears = asyncHandler(async (req, res, next) => {
    const year = await StoreYear.find({user: req.user}).populate({
        path: 'user',
        select: ' username'
    });

    res.status(200).json({
        success: true,
        count: year.length,
        data: year
    });
});

// @desc      Get single year
// @route     GET /api/v1/years
// @access    Public
exports.getYear = asyncHandler(async (req, res, next) => {

    const year = await StoreYear.findById(req.params.id).populate({
        path: 'user',
        select: ' username'
    });;

    if (!year) {
        return next(new ErrorResponse(`year not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: year
    }); 
});

// @desc      Add new year
// @route     POST /api/v1/years
// @access    Private
exports.addYear = asyncHandler(async (req, res, next) => {
    const user = req.user

    const year = await StoreYear.create({...req.body, user: user});

    res.status(201).json({
        success: true,
        data: year
    })
});

// @desc      Update year
// @route     PUT /api/v1/years
// @access    Private
exports.updateYear = asyncHandler(async (req, res, next) => {

    const year = await StoreYear.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!year) {
        return next(new ErrorResponse(`year to update not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: year
    });
});

// @desc      Delete year
// @route     DELETE /api/v1/years
// @access    Private
exports.deleteYear = asyncHandler(async (req, res, next) => {

    const year = await StoreYear.findByIdAndDelete(req.params.id);

    if(!year) {
        return next(new ErrorResponse(`year to delete not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: {}
    });
});
