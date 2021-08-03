import http from "../http-common";

class BookService {
  getAll() {
    return http.get("/");
  }
}

export default new BookService();