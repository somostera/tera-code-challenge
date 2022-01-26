import api from "../api";
import {responseListBooks} from "../componentes/types";

class DataService {
  getAll() {
    return api.get<Array<responseListBooks>>("/");
  }
}

export default new DataService();