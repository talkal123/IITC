const Products = require('../models/productModel')
const asyncHandler = require('express-async-handler')

// get all product
const getProducts = asyncHandler(async(req,res) => {
    try {
        const products = await Products.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})


//get a single product

const getProduct = asyncHandler(async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Products.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})


// create a product

const createProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `cannot find product with ID ${id}`});
        }
        const updateProduct = await Products.findById(id);
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }

})

// update a product

const updateProduct = asyncHandler(async(req, res) => {
    try{
        const product = await Products.create(req.body)
        res.status(200);
        throw new Error(`cannot find any product with ID ${id}`);
    } catch (error) {
        console.log(error.message);
        res.status(500);
        throw new Error(error.message);
    }
})


//delete a product

const deleteProduct = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndDelete(id);
            if(!product){
                res.status(404);
                throw new Error(`cannot find any product with ID ${id}`);
        }
        res.status(200).json(product);

    } catch (error){
        res.status(500);
        throw new Error(error.message);
    }
})



module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}