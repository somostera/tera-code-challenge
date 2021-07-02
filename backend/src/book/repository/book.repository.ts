import {Any, EntityRepository, Like, MoreThan, Repository} from "typeorm";
import { Book } from "../entity/books";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async findByCategory(category: string): Promise<Book[]> {
    return await this.find({ category });
  }

  async findByName(name: string): Promise<Book[]> {
    return await this.find({ name: Like("%" + name + "%") });
  }

  async findWithStock(): Promise<Book[]> {
    return await this.find({ stock: MoreThan(0) });
  }

  async findBookByUserWhoLiked(userName: string) {
    const book = await this.find();
    return book.map((b: Book) => {
      if (b.users_who_liked.includes(userName)) {
        return b;
      }
    }).filter( (b) => {
      if (b !== null) {
        return b;
      }
    });
  }
}
