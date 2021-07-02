import { controller, httpGet, request } from "inversify-express-utils";
import responseFactory from "../../../../core/response/response";
import { BookService } from "../../services/book.service";

@controller("/api/v1/book")
export class BookController {
  constructor(private service: BookService) {}

  @httpGet("/")
  async allBooks() {
    return responseFactory("", await this.service.getAllBook());
  }

  @httpGet("/stock")
  async bookInStock() {
    return responseFactory("", await this.service.bookWithStock());
  }

  @httpGet("/best-rated")
  async booksBestRated() {
    return responseFactory("", await this.service.booksBestRated());
  }

  @httpGet("/alphabetical-order")
  async booksAlphabeticalOrder() {
    return responseFactory("", await this.service.booksAlphabeticalOrder());
  }

  @httpGet("/user-liked/:user")
  async booksThaUserLiked(@request() req) {
    const books = await this.service.booksThaUserLiked(req.params.user);
    return responseFactory("", books);
  }

  @httpGet("/category/:category")
  async bookForCategories(@request() req) {
    return responseFactory(
      "",
      await this.service.booksForCategory(req.params.category)
    );
  }

  @httpGet("/name/:name")
  async bookForName(@request() req) {
    return responseFactory(
      "",
      await this.service.booksForName(req.params.name)
    );
  }
}
