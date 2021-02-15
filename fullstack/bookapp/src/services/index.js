import axios from 'axios'
const Env = process.env
const { localStorage } = window

const axiosInstance = axios.create({
  baseURL: Env.VUE_APP_API_BASEURL
})

axiosInstance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint)
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body)
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body)
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint)
  },
  login(body) {
    return axiosInstance.post('/login', body)
  }
}
