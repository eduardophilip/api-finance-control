const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    
    let error = {...err};
    error = new ErrorResponse(err.message, err.statusCode);
    
    console.log(err.stack.red);

    if (err.name === 'CastError') {
        const message = `Transaction not found whith id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }

    console.log(err.errors)

    console.log(error.message.magenta);
    console.log(error.statusCode);
    

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}

module.exports = errorHandler;