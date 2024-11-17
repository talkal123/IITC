const mongoose = require('mongoose');
const express = require("express");
const userRoutes = require('./routes/userRoute.js')
const bookRoutes = require('./routes/bookRoute.js')

require('dotenv').config()

const PORT = 3000
const dbUri = process.env.DB_URI

const app = express()

app.use(express.json())

mongoose.connect(dbUri)



app.use('/api/users', userRoutes)

app.use('/api/books', bookRoutes)





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})






