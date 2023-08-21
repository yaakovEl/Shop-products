const express = require('express');
const router = express.Router();

const {
    getAllCake,
    createCake,
    getCake,
    updateCake,
    deleteCake,
} = require("../controllers/cake")

router.get('/', getAllCake);
router.post('/', createCake);
router.get('/:cakeId', getCake);
router.patch('/:cakeId', updateCake);
router.delete('/:cakeId', deleteCake);

module.exports = router