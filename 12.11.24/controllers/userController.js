const User = require("../models/userModel");
const mongoose = require('mongoose');
const router = require("../routes/userRoute");



const getUsers = async(req, res) =>{
    try {
        const users = await User.find();
        console.log(users[3].fullName)
        if (!users){
            return res.status(404).json({message: 'No Users Found'});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createUser = async(req, res) =>{
    try {
        const {fname,lname, email, phone} = req.body;

    if(!fname, !lname, !email, !phone){
        return res.status(400).json({ message: 'Name, email, and phone are required' });
    }

    const newUser = new User({
        fname,
        lname,
        email,
        phone
    });

    await newUser.save();
    res.status(201).json(newUser)
    
    } catch (error) {
        res.status(500).json({message: error.message});

    }
}


const updateUser = async (req, res) => {
    try{
        const user = await User.findOneAndUpdate({ _id: req.params.id}, req.body);
        res.status(200).send()
    } catch (error) {
        res.status(500).json({message: error.message});

    }
    
}


const getUser = async (req, res) => {
    try {
        const{ id } = req.params
        const foundUser = await User.findById(id)

        if (!foundUser) {
            return res.status(404).send({
                status: "filed",
                data: "User Not Found",
            });
        }

        res.send({
            status: "succses",
            data: foundUser,
        });

    } catch (error) {
        console.log(error);

        if (error.name === "CastError"){
            return res.status(400).send({
                status:"failed",
                data: "not valid"
            })
        }
        res.status(500).send(error)
    }
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser
}