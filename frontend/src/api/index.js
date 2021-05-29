import Request from '../utils/request'

export default {
    getBooks() {
        return Request.get('/url-tera-code-challenge')
    },
}
