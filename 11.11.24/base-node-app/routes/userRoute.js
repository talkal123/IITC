const express = require('express') 
const Users = require('../model/userModel')
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controller/userController')

 const router = express.Router()

 router.get('/', getUsers);

 router.get('/:id', getUser);

 router.post('/', createUser) 

// router.put('/:id', updateUser)


// router.delete('/:id', deleteUser)

 module.exports = router;