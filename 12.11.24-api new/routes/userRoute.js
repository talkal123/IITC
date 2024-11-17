const express = require('express') 
const Users = require('../models/userModel')
const {getUser, getUsers, createUser, updateUser, deleteUser} = require('../controllers/userController')

 const router = express.Router()

 router.get('/', getUsers);

 router.get('/:id', getUser);

 router.post('/', createUser) 

 router.put('/:id', updateUser)


 router.delete('/:id', deleteUser)

 module.exports = router;