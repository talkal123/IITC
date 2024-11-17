const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: [true, 'Please add a title'], 
    },
    author: {
        type: String,
        required:[true, 'Please add a author'], 
    },
    publishedDate: {
        type: String,
        required:[true, 'Please add a publishedDate'],
    },
    pages: { 
        type: String,
        required:[true, 'Please add a publishedDate'],
     },    
  });
  

  module.exports = mongoose.model('Book', bookSchema);