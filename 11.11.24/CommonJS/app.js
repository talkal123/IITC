const express = require('express');

const app = express()

app.get("/", () =>{
    res.send("Hello World!")
})

app.get('/user', () =>{
    res.send({
        name: 'john doe',
        age: 30,
        email: 'johndoe@example.com'
    })
})

app.listen(PORT, () =>{
    
})