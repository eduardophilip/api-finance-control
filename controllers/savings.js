const Saving = require('../models/Saving');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// @desc      Get all savings
// @route     GET /api/v1/savings
// @access    Public
exports.getSavings = asyncHandler(async (req, res, next) => {
    const saving = await Saving.find({user: req.user}).populate({
        path: 'user',
        select: ' username'
    });

    res.status(200).json({
        success: true, 
        count: saving.length, 
        data: saving
    });
});

// @desc      Get single saving
// @route     GET /api/v1/savings
// @access    Public
exports.getSaving = asyncHandler(async (req, res, next) => {

    const saving = await Saving.findById(req.params.id).populate({
        path: 'user',
        select: ' username'
    });

    if(!saving) {
        return next(new ErrorResponse(`Saving not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true, 
        data: saving
    });
});

// @desc      Add new saving
// @route     POST /api/v1/savings
// @access    Private
exports.addSaving = asyncHandler(async (req, res, next) => {

    const user = req.user

    const saving = await Saving.create({...req.body, user: user});

    res.status(201).json({
        success: true,
        data: saving
    })

});

// @desc      Edit saving
// @route     PUT /api/v1/savings
// @access    Private
exports.editSaving = asyncHandler(async (req, res, next) => {

    const saving = await Saving.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!saving) {
        return next(new ErrorResponse(`Saving to edit not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({success: true, data: saving});

});

// @desc      Delete saving
// @route     DELETE /api/v1/savings
// @access    Private
exports.deleteSaving = asyncHandler(async (req, res, next) => {

    const saving = await Saving.findByIdAndDelete(req.params.id);

    if(!saving) {
        return next(new ErrorResponse(`Saving to delete not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: {}
    })

});

// @desc      Get all saving per month
// @route     GET /api/v1/savings/date/month/:month
// @access    public
exports.getSavingMonth = asyncHandler(async (req, res, next) => {
    const yearMonth = Object.values(req.params);

    const saving = await Saving.find({
        "date.year": `${yearMonth[0]}`, 
        "date.month": `${yearMonth[1]}`,
        user: req.user
    }).populate({
        path: 'user',
        select: ' username'
    });

    res.status(200).json({
        success:true,
        count: saving.length,
        data: saving
    });
});

// @desc      Get all saving per year
// @route     GET /api/v1/savings/date/year/:year
// @access    public
exports.getSavingYear = asyncHandler(async (req, res, next) => {
    const year = Object.values(req.params);

    const saving = await Saving.find({
        "date.year": `${year}`,
        user: req.user
    }).populate({
        path: 'user',
        select: ' username'
    });

    res.status(200).json({
        success:true,
        count: saving.length,
        data: saving
    });
});