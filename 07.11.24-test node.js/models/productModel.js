const { Timestamp } = require('bson')
const mongoose = require('mongoose');
const { type } = require('os');

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: false,
        },
        image: {
            type: String,
            required: false,
        }
        
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product' , productSchema);

module.exports = Product;