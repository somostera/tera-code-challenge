import axios from "axios";
import LoadingInterceptor from "./loadingInterceptor";
import RequestObservable from "./requestObservable";


const api = axios.create({
//baseURL: "http://localhost:8080/api",
baseURL : "http://livraria-do-cowboy.herokuapp.com/api"
});

const observable = new RequestObservable();

LoadingInterceptor(api, (id, remove) => {
  observable.updateRequests(id, remove);
});
const _books = {
  list: () => api.get("/book/list"),
  search: (params) => api.get("/book/search", { params }),
  create: (data) => api.post("/book", data),
  delete: (id) => api.delete(`/book/${id}`),
  update: (data) => api.post(`/book/${data.id}`, data),
  liked: (id) => api.put(`/book/liked/${id}`),
  get: (id) => api.get(`/book/${id}`),
};

export const books = _books;
export const watchRequests = (callback) => observable.watch(callback);