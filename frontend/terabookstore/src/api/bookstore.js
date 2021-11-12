import axios from 'axios'

const instance = axios.create({
  baseURL: `https://us-central1-tera-platform.cloudfunctions.net/`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  getBooks: () => new Promise((resolve, reject) => {
    instance.get(
      `url-tera-code-challenge`,
    ).then(response => {
      if (response.status === 200) {
        resolve(response.data)
      }
      else {
        reject(new Error('CouldNotConnect'))
      }
    }).catch(err =>  {
      reject(err.response || err)
    })
  })
}
