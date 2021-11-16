const Month = require('../models/Month');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// @desc      Get all Month
// @route     GET /api/v1/months
// @access    Public
exports.getMonths = asyncHandler(async (req, res, next) => {
    const month = await Month.find()

    res.status(200).json({
        success: true, 
        count: month.length, 
        data: month
    });
});

// @desc      Get single month
// @route     GET /api/v1/months/:abbreviation
// @access    Public
exports.getMonth = asyncHandler(async (req, res, next) => {

    const reqParam = req.params.abbreviation;
    const month = await Month.find({
        abbreviation: {
            $regex: `${reqParam}`, 
            $options: 'i' 
        }
    
    });

    if (month.length == 0) {
        return next(new ErrorResponse(`Month not found with parameter ${reqParam}`, 404));
    }

    res.status(200).json({
        success: true,
        data: month
    }); 
});