import express from 'express';
import cors from 'cors';
import { CommonRoutesConfig } from './common/common.routes.config';
import { BooksRoutes } from './books/books.routes.config';
import helmet from 'helmet';
import { nanoid } from 'nanoid'
import fs from 'fs';
const dataPath = './data/books.json';

import bodyParser from 'body-parser';
import * as http from 'http';
import path from 'path';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3003;
const routes: Array<CommonRoutesConfig> = [];

app.use(express.static(path.join(__dirname, 'client/build')))

// adding middleware to parse all incoming requests as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//adding middleware to allow cross-origin requests
app.use(cors());

app.use(helmet());

routes.push(new BooksRoutes(app));

const runningMessage = `Server running at http://localhost:${port}`;


app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

server.listen(port, () => {
  console.log(runningMessage);
  fs.readFile(dataPath, 'utf8', (err, data) => {
    let dataObject = JSON.parse(data);
    
    // @ts-ignore
    let books = dataObject.map(book => {
      book.id = nanoid();
      return book;
    });
    let jsonDataStr = JSON.stringify(books); 

    fs.writeFile(dataPath, jsonDataStr, err => {});    
  });
});


