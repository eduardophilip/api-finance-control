const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const sendTokenResponse = require('../middleware/setCookietoken')
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

    sendTokenResponse(user, 200, res)
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

    sendTokenResponse(user, 200, res)
  }); 

// @desc      Log user out / clear cookie
// @route     GET /api/v1/auth/logout
// @access    Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: {}
  });
}); 