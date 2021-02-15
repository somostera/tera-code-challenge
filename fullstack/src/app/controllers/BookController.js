
const Book = require('../models/Book')
const errorHandler = require('./../helpers/dbErrorHandler')

class BookController {

     async create(req, res) {
        try{
            const book = await Book.create(req.body)
            return res.json(book)
            
        }
        catch(err){
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }

        
    }

    async index(req, res) {

        try{
            const books = await Book.find({})
            return res.json(books)
        } catch(err){
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        

        
    }

    async getCategory(req, res) {
        try{

            const books = await  Book.distinct('category')

            return res.json(books)
        }catch(err){
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
       
    }

    async getBookByTitle(req, res) {
        try{

            const books = await  Book.findOne({name: req.params.name})
    
            return res.json(books)

        } catch(err){
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
       
    }
  
    async destroy(req, res) {

        try{
            const book = await Book.findById(req.params.id)

            if(!book) {
                return res.json({error: 'Livro não encontrado'})
            }
    
            await book.remove()
    
            return res.json({deleted:true})
        } catch(err){
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
       
    }

    async update(req, res) {
        const query = {"_id": req.params.id}
        const update = req.body

        
        await Book.updateOne(query, update)
        .then(() => res.status(204).send())
        .catch(err => console.error(`Failed to add review: ${err}`))
      
    }

}

module.exports = new BookController()