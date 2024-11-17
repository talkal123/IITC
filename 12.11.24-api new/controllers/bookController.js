const Book = require("../models/bookModel");
const mongoose = require('mongoose');
const router = require("../routes/bookRoute");



const getBooks = async(req, res) =>{
    try {
        const books = await Book.find();
        if (!books){
            return res.status(404).json({message: 'No Books Found'});
        }
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createBook = async(req, res) =>{
    try {
        const {title,author, publishedDate, pages} = req.body;

    if(!title, !author, !publishedDate, !pages){
        return res.status(400).json({ message: 'title,author, publishedDate, pages are required' });
    }

    const newBook = new Book({
        title,
        author,
        publishedDate,
        pages
    });

    await newBook.save();
    res.status(201).json(newBook)
    
    } catch (error) {
        res.status(500).json({message: error.message});

    }
}

const getBook = async (req, res) => {
    try {
        const{ id } = req.params
        const foundBook = await Book.findById(id)

        if (!foundBook) {
            return res.status(404).send({
                status: "filed",
                data: "Book Not Found",
            });
        }

        res.send({
            status: "succses",
            data: foundBook,
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


const updateBook = async (req, res) => {
    try{
        const book = await Book.findOneAndUpdate({ _id: req.params.id}, req.body);
        res.status(200).send()
    } catch (error) {
        res.status(500).json({message: error.message});

    }
    
}

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({ _id: req.params.id});
        res.status(200).send(book)

    } catch (error) {
        res.status(500).send(error)
    }
}







module.exports = {
    getBooks,
    createBook,
    getBook,
    updateBook,
    deleteBook
}