const Repository = require('@schirrel/pg-connection/Repository');
const Book = require('../model/Book');
const Logger = require("../utils/logger");

class BookRepository extends Repository{
	constructor(){
		super(Book);
		Logger.debug("BookRepository");
	}
}

module.exports = BookRepository;