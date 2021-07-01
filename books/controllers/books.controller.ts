import express from 'express';
import fs from 'fs';
import { nanoid } from 'nanoid'
const dataPath = './data/books.json';

class BooksController {

  async listBooks(req: express.Request, res: express.Response) {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      }    
      res.status(200).send(JSON.parse(data));
    })
  }

  async getBookById(req: express.Request, res: express.Response) {
    const bookId = req.params.id;
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send();
      }
      let dataObject = JSON.parse(data);
      
      // @ts-ignore
      let book = dataObject.find(x => x.id === bookId);
      if (book) {
        res.status(200).send(book);
      } else {
        res.status(404).send();
      }           
    });        
  }

  async getBooksByName(req: express.Request, res: express.Response) {
    const bookName = req.params.name;
    
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send();
      }
      let dataObject = JSON.parse(data);
      
      // @ts-ignore
      let books = dataObject.filter(x => x.name.includes(bookName));
      if (books) {
        res.status(200).send(books);
      } else {
        res.status(404).send();
      }           
    });        
  }

  async createBook(req: express.Request, res: express.Response) {
    const newBook = req.body;
    newBook.id = nanoid();

    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      }

      let dataObject = JSON.parse(data);
      let books = [...dataObject, newBook];
      let jsonDataStr = JSON.stringify(books); 

      fs.writeFile(dataPath, jsonDataStr, err => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).send({ id: newBook.id });
        }        
      });
    });        
  }

  async put(req: express.Request, res: express.Response) {
    const bookId = req.params.id;
    const body = req.body;
    
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      }      
      let dataObject = JSON.parse(data);
      
      // @ts-ignore
      let books = dataObject.map(element => {
        if (element.id === bookId) {
          element = body
        }
        return element;
      });
      let jsonDataStr = JSON.stringify(books); 

      fs.writeFile(dataPath, jsonDataStr, err => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(204).send();
        }        
      });
    }); 
  }

  async removeBook(req: express.Request, res: express.Response) {
    const bookId = req.params.id;
    
    fs.readFile(dataPath, 'utf8', (err, data) => {
      let dataObject = JSON.parse(data);
      if (err) {
        res.status(500).send(err);
      }
      
      // @ts-ignore
      let books = dataObject.filter(x => x.id !== bookId);
      let jsonDataStr = JSON.stringify(books); 

      fs.writeFile(dataPath, jsonDataStr, err => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).send();
        }        
      });
    });        
  }
} 

export default new BooksController();