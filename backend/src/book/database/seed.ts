import { Book } from "../entity/books";
import { getCustomRepository } from "typeorm";
import { BookRepository } from "../repository/book.repository";

export default function () {
  const jsonSeed = require("./db.json");
  const repository = getCustomRepository(BookRepository);

  jsonSeed.forEach(async (data: Book) => {
    await repository.insert(data);
  });
}
