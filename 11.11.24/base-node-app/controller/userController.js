 const Users = require("../model/userModel")
 const asyncHandler = require('express-async-handler')
 const mongoose = require('mongoose')

//  get all users
const getUsers = asyncHandler(async(req,res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// //get a single user

const getUser = asyncHandler(async (req,res) => {
    try {
        const {id} = req.params;
        const user = await Users.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})


// // create a user

const createUser = asyncHandler(async(req, res) => {
    try {
        const user = req.body;
        const createUser = new Users(user);
        await createUser.save()
        res.status(200).json(createUser);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }

})

//update a product

// const updateUser = asyncHandler(async(req, res) => {
//     try{
//         const user = await Users.create(req.body)
//         res.status(200);
//         throw new Error(`cannot find any product with ID ${name}`);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500);
//         throw new Error(error.message);
//     }
// })


// delete a product

// const deleteUser = asyncHandler(async(req, res) =>{
//     try {
//         const {name} = req.params;
//         const user = await Users.findByNameAndDelete(name);
//             if(!user){
//                 res.status(404);
//                 throw new Error(`cannot find any product with ID ${name}`);
//         }
//         res.status(200).json(product);

//     } catch (error){
//         res.status(500);
//         throw new Error(error.message);
//     }
// })



 module.exports = {
    getUsers,
    getUser,
    createUser,
//     updateUser,
//     deleteUser
 }