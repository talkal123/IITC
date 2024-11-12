const express = require('express') 
const Products = require('../models/productModel')
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')

const router = express.Router()

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', updateProduct) 

router.put('/:id', createProduct)


router.delete('/:id', deleteProduct)

module.exports = router;