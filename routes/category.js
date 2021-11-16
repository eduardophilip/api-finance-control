const express = require('express');
const { 
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
 } = require('../controllers/category.js');
const router = express.Router();

router
    .route('/')
    .get(getCategories)
    .post(addCategory);

router
    .route('/:id')
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = router;