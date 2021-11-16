const sendTokenResponse = (user, statusCode, res) => {

    const token = user.getSignedJwtToken();

    const options = {
      maxAge:  1 * 60 * 60 * 1000,
      httpOnly: true
    };
    if (process.env.NODE_ENV === 'production') {
      options.secure = true;
    }
    user.password = undefined;

    res
      .status(statusCode)
      .cookie('token', token, options)
      .json({
        success: true,
        user,
        token
      });
  };

  module.exports = sendTokenResponse;