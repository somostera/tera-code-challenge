import axios from "axios";
import LoadingInterceptor from "./loadingInterceptor";
import RequestObservable from "./requestObservable";


const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

const observable = new RequestObservable();

LoadingInterceptor(api, (id, remove) => {
  observable.updateRequests(id, remove);
});
const _books = {
  list: () => api.get("/book/list"),
  search: (params) => api.get("/book/search", { params }),
  create: (data) => api.post("/book", data),
  delete: (id) => api.post(`/book/${id}`),
  update: (data) => api.post(`/book/${data.id}`, data),
  get: (id) => api.get(`/book/${id}`),
};

export const books = _books;
export const watchRequests = (callback) => observable.watch(callback);