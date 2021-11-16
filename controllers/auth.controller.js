const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/User');

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {

    const { fullName, username, email, password } = req.body;

    const userAlreadyExist = await User.findOne({email});
    const usernameExist = await User.findOne({username});

    if (userAlreadyExist) {
       return next(new ErrorResponse(`User already exists with email ${email}`, 404));
    }
    if (usernameExist) {
       return next(new ErrorResponse(`username already exists with ${username}, please add other username`, 404));
    }
 
    const user = await User.create({
        fullName,
        username,
        email,
        password
    });

    user.password = undefined;

    const token = user.getSignedJwtToken();
  
    res.status(200).json({ 
        success: true, 
        user,
        token 
    });
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorResponse('Please provide an email and password', 400));
    }

    const user = await User.findOne({ email }).select('+password');
  
    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    const isMatch = await user.matchPassword(password);
  
    if (!isMatch) {
      return next(new ErrorResponse('Invalid password', 401));
    }

    user.password = undefined;

    const token = user.getSignedJwtToken();
  
    res.status(200).json({ 
        success: true,
        user, 
        token 
    });
  }); 