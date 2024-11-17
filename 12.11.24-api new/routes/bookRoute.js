const express = require('express') 
const Books = require('../models/bookModel')
const {getBooks, createBook, getBook,updateBook, deleteBook} = require('../controllers/bookController');

const router = express.Router()


router.get('/', getBooks);

router.get('/:id', getBook);


router.post('/', createBook); 

router.put('/:id', updateBook);

router.delete('/:id', deleteBook)





module.exports = router;
