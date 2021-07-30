import http from "../http-common";

class BookService {
  getAll() {
    return http.get("/");
  }

  get(id: string) {
    return http.get(`/${id}`);
  }

  findByName(name: string) {
    return http.get(`/?name=${name}`);
  }
}

export default new BookService();