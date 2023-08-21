const mongoose = require('mongoose');
const Category = require('../models/category');

module.exports = {
    getAllcategories: (req, res) => {
        Category.find().then((categories) => {
            res.status(200).json({
                categories
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },
    createCategory: (req, res) => {
        const { title, description, price, Photos } = req.body;

        const category = new Category({
            _id: new mongoose.Types.ObjectId(),
            title,
            description,
            price,
            Photos
        })
        category.save().then(() => {
            res.status(200).json({
                message: "created category EY"
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },
    getCategory: (req, res) => {
        const categoryId = req.params.categoryId;

        Category.findById(categoryId).then((category) => {
            res.status(200).json({
                category
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },
    //פונקציית עדכון לא עובדת לבדוק
    updateCategory: (req, res) => {
        const categoryId = req.params.categoryId;

        Category.updateOne({ _id: categoryId }, req.body).then(() => {
            res.status(200).json({
                // categoryId,
                message: `update Category${categoryId}`
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },
    deleteCategory: (req, res) => {
        const categoryId = req.params.categoryId;

        Category.deleteById({_id: categoryId}).then(() => {
                res.status(200).json({
                    message: `category _id ${categoryId} deleted`
                })
            })
            .catch(error => {
                res.status(500).json({
                    error
                })
            })
    }
}