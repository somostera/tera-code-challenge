import axios from 'axios'

const URL = process.env.VUE_APP_API_URI

export default {
  async getAllBooks() {
    return (await axios.get(URL)).data
  }
}