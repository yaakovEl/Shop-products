const mongoose = require('mongoose')
const Cake = require('../models/cake')
const Category = require('../models/category')

module.exports = {
    getAllCake: (req, res) => {
        Cake.find().then((cake) => {
            res.status(200).json({
                cake
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },
    createCake: (req, res) => {
        const { title, description, content, categoryId } = req.body;

        Category.findById(categoryId).then((category) => {
            if (!category) {
                return res.status(404).json({
                    message: "category not found"
                })
            }
            const cake = new Cake({
                _id: new mongoose.Types.ObjectId,
                title: title,
                description: description,
                content: content,
                categoryId: categoryId
            })
            return cake.save().then(() => {
            }).then(() => {
                res.status(200).json({
                    message: "creat cake v"
                })
            }).catch(erorr => {
                res.status(500).json({
                    erorr
                })
            })
        })
    },
    getCake: (req, res) => {
        const cakeId = req.params.cakeId;
        Cake.findById(cakeId).then((cake) => {
            res.status(200).json({
                cake
            }).catch(err => {
                console.log(err);
            })
        })
    },
    updateCake: (req, res) => {
        const cakeId = req.params.cakeId;

        Cake.updateOne({ _id: cakeId }, req.body).then(() => {
            res.status(200).json({
                message: "cake update"
            }).catch(err => {
                console.log(err);
            })
        })
        res.status(200).json({
            message: `update cake -${cakeId}`
        })
    },
    getCake: (req, res) => {
        const cakeId = req.params.cakeId
        Cake.findById(cakeId).then((cake) => {
            res.status(200).json({
                cake
            })
            // .catch(error => {
            //     res.status(500).json({
            //         error
            //     })
            // })
        })
    },
    deleteCake: (req, res) => {
        const cakeId = req.params.cakeId

        Cake.deleteOne({ _id: cakeId },).then(() => {
            res.status(200).json({
                message: `cake in ${cakeId} Deleted`
            }).catch((error) => {
                res.status(500).json({
                    error
                })
            })
        })
        // res.status(200).json({
        //     message: `delete cake -${cakeId}`
        // })
    }
}