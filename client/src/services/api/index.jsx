import axios from 'axios';

const defaultTimeout = 240000;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3003",
  timeout: defaultTimeout
});

api.interceptors.request.use(async config => {
  return config;
});

export default api;
export { api };