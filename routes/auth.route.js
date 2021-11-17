const express = require('express');
const { 
    register,
    login,
    logout
 } = require('../controllers/auth.controller');
const router = express.Router();

const { protect } = require('../middleware/auth.middleware');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', protect, logout);


module.exports = router;