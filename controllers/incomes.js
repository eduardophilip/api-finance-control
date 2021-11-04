// @desc      Get all incomes
// @route     GET /api/v1/incomes
// @access    Public
exports.getIncomes = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all incomes'});
}

// @desc      Get single income
// @route     GET /api/v1/incomes
// @access    Public
exports.getIncome = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show single income'});
}

// @desc      Add new income
// @route     POST /api/v1/incomes
// @access    Private
exports.addIncome = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Add new income'});
}

// @desc      Edit income
// @route     PUT /api/v1/incomes
// @access    Private
exports.editIncome = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Edit income'});
}

// @desc      Delete income
// @route     DELETE /api/v1/incomes
// @access    Private
exports.deleteIncome = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Delete income'});
}