import axios from 'axios'

const api = axios.create({
  baseURL: 'https://us-central1-tera-platform.cloudfunctions.net/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const getBooksFromApi = () => api.get('url-tera-code-challenge')
