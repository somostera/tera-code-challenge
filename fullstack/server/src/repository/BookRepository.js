const Repository = require('@schirrel/pg-connection/Repository');
const Book = require('../model/Book');

class BookRepository extends Repository{
	constructor(){
		super(Book);
	}
}

module.exports = BookRepository;