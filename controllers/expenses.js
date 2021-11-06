// @desc      Get all expenses
// @route     GET /api/v1/expenses
// @access    Public
exports.getExpenses = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all expenses'});
}

// @desc      Get single expense
// @route     GET /api/v1/expenses
// @access    Public
exports.getExpense = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show single expense'});
}

// @desc      Add new expense
// @route     POST /api/v1/expenses
// @access    Private
exports.addExpense = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Add new expense'});
}

// @desc      Edit expense
// @route     PUT /api/v1/expenses
// @access    Private
exports.editExpense = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Edit expense'});
}

// @desc      Delete expense
// @route     DELETE /api/v1/expenses
// @access    Private
exports.deleteExpense = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Delete income'});
} 