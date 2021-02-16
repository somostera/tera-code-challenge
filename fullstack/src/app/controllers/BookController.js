
const Book = require('../models/Book')
const errorHandler = require('./../helpers/dbErrorHandler')

class BookController {

     async create(req, res) {
         
            await Book.create(req.body)
            .then(() =>{
                res.sendStatus(201).send()
            })
            .catch(err =>{
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            })
        
    }

    async index(req, res) {

            await Book.find({})
            .then(books =>{
                res.json(books)
            })
            .catch(err =>{
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            })              
    }

    async getCategory(req, res) {

            await  Book.distinct('category').then( books=>{
                return res.json(books)
            })
            .catch(err=>{
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            })
       
    }

    async getBookByTitle(req, res) {
            const nameBook= new RegExp(["^", req.params.name, "$"].join(""), "i")

            await  Book.findOne({name: nameBook})
            .then( books =>{
                return res.json(books)
            })
            .catch(err =>{
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            })
       
    }
  
    async destroy(req, res) {
            const book = await Book.findById(req.params.id)

            if(!book) {
                return res.json({error: 'Livro não encontrado'})
            }
    
            await book.remove().then(() => {
                res.status(204).send()
            })
            .catch(err =>{
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            })

    }

    async update(req, res) {

        const query = {"_id": req.params.id}
        const update = req.body
        
        await Book.updateOne(query, update)
        .then(() => {
            res.status(204).send()
        })
        .catch(err => {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        })
      
    }

}

module.exports = new BookController()