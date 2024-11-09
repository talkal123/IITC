const express= require('express')
const mongoose = require('mongoose')
const Products = require('./models/productModel')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())


//routes

app.get('/' , (req, res) => {
    res.send('hello api')
})

app.get('/blog' , (req, res) => {
    res.send('hello blog')
})

app.get('/products',async(req,res) => {
    try {
        const products = await Products.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500),json({message: error.message})
    }
})

app.get('/products/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Products.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500),json({message: error.message})
    }
})

app.post('/product' , async(req, res) => {
    try{
        const product = await Products.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `cannot find product with ID ${id}`});
        }
        const updateProduct = await Products.findById(id);
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500),json({message: error.message})
    }

})


app.delete('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndDelete(id);
            if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);

    } catch (error){
        res.status(500).json({message: error.message})
    }
})


mongoose.connect('mongodb+srv://talkal:0tw3LltEeBvbP2L4@cluster0.3gacv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    app.listen(3000, () => {
    console.log(`Node API npp is running on port 3000`)
    
    })
}).catch ((error) => {
    console.log(error)
})

