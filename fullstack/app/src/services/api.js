import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

const _books = {
  list: () => api.get("/book/list"),
  create: (data) => api.post("/book", data),
  delete: (id) => api.post(`/book/${id}`),
  update: (data) => api.post(`/book/${data.id}`, data),
  get: (id) => api.get(`/book/${id}`),
};

export const books = _books;
