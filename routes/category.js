const express = require('express');
const { 
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
 } = require('../controllers/category.js');
const router = express.Router();

const { protect } = require('../middleware/auth.middleware');

router
    .route('/')
    .get(protect, getCategories)
    .post(protect, addCategory);

router
    .route('/:id')
    .put(protect, updateCategory)
    .delete(protect, deleteCategory);

module.exports = router;