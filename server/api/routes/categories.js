const express = require('express');
const router = express.Router();

const {
    getAllcategories,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory,
} = require("../controllers/categories");
// const cake = require('../models/cake');

router.get('/', getAllcategories);
router.post('/', createCategory);
router.get('/:categoryId', getCategory);
router.patch('/:categorId', updateCategory);
router.delete('/:categorId', deleteCategory);


module.exports = router