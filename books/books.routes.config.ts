import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import BooksController from './controllers/books.controller';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import fs from 'fs';
import { body } from 'express-validator';

export class BooksRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'BooksRoutes');
  }

  configureRoutes() {    
    this.app
      .route('/books')
      .get(BooksController.listBooks)
      .post(
        body('name').isString(),
        body('author').isString(),
        body('description').isString(),
        body('cover_picture').isString(),
        body('category').isString(),
        body('stock').isNumeric(),
        BodyValidationMiddleware.verifyBodyFieldsErrors,
        BooksController.createBook
      );
      
    this.app
      .route('/books/:id')
      .get(BooksController.getBookById)
      .delete(BooksController.removeBook);
    
    this.app
      .route('/books/search/:name')
      .get(BooksController.getBooksByName);

    this.app.put('/books/:id', [
      body('id').isString(),
      body('name').isString(),
      body('author').isString(),
      body('description').isString(),
      body('cover_picture').isString(),
      body('category').isString(),
      body('stock').isNumeric(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      BooksController.put
    ]);

    return this.app;
  }
}