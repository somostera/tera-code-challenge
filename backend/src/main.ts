import "reflect-metadata";
import { ServerJaspe } from "../core/server.jaspe";
import { BookModule } from "./book/book.module";

async function bootstrap() {
  const app = ServerJaspe.factory(new BookModule());
  app.setPort(9658);
  await app.run();
}
bootstrap();
