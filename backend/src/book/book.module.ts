import { SingletonModule } from "../../core/singleton/singleton.module";
import { BookController } from "./http/controller/book.controller";
import { BookService } from "./services/book.service";

export class BookModule extends SingletonModule {
  controllers = [BookController];
  providers = [BookService];
}
