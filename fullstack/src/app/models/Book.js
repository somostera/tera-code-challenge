const mongoose = require('mongoose')

const bookModel = new mongoose.Schema({
    name: String,
    author: String,
    description: String, 
    cover_picture: String,
    category: String,
    stock: Number,
    users_who_liked:  [{
        type: String
    }]

})

module.exports = mongoose.model('books', bookModel)
