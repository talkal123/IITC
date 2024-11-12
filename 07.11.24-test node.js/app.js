require('dotenv').config()
const express= require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
//לעתיד const userRoute = require('./routes/userRoute');

const app = express()

const PORT = 3000
const MONGO_URL = process.env.MONGO_URL

app.use(express.json())


//routes

app.use('/api/products', productRoute);
//לעתיד app.use('/api/users', userRoute);


app.get('/' , (req, res) => {
    res.send('hello api')
})

app.get('/blog' , (req, res) => {
    res.send('hello blog')
})


app.use(errorMiddleware);

mongoose.connect(MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
    console.log(`Node API npp is running on port ${PORT}`)
    
    })
}).catch ((error) => {
    console.log(error)
})

