import { injectable } from "inversify-props";
import { getCustomRepository } from "typeorm";
import { BookRepository } from "../repository/book.repository";
import { Book } from "../entity/books";

@injectable()
export class BookService {
  private repository = getCustomRepository(BookRepository);

  async getAllBook(): Promise<Book[]> {
    return await this.repository.find();
  }
  async bookWithStock(): Promise<Book[]> {
    return await this.repository.findWithStock();
  }

  async booksAlphabeticalOrder(): Promise<Book[]> {
    return await this.repository.find({
      order: { name: "ASC" },
    });
  }

  async booksBestRated(): Promise<Book[]> {
    const books = await this.getAllBook();
    return books.sort((a, b) => {
      return a.users_who_liked.length - b.users_who_liked.length;
    });
  }

  async booksThaUserLiked(userName: string) {
    return await this.repository.findBookByUserWhoLiked(userName);
  }

  async booksForCategory(category: string): Promise<Book[]> {
    return await this.repository.findByCategory(category);
  }

  async booksForName(name: string): Promise<Book[]> {
    return await this.repository.findByName(name);
  }
}
