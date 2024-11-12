const mongoose = require('mongoose');
const express = require("express");
const userRoutes = require('./routes/userRoute.js')
require('dotenv').config()

const PORT = 3000
const dbUri = process.env.DB_URI

const app = express()

app.use(express.json())

mongoose.connect(dbUri)

app.get("/", (req, res) => {
    res.send("Hello World!")
})



app.use('/api/users', userRoutes)

app.get("/:id", (req, res) => {
    res.send("Hello World!")
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})






