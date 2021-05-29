import axios from 'axios'
import store from '@/store'
import { SHOW_LOADER, HIDE_LOADER } from '@/store/mutation-types'

class Request {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.VUE_APP_BASE_API,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            timeout: 5000,
        })

        this.axios.interceptors.request.use(
            config => {
                store.commit(SHOW_LOADER)
                return config
            },
            error => {
                store.commit(HIDE_LOADER)
                return Promise.reject(error)
            }
        )

        this.axios.interceptors.response.use(
            response => {
                store.commit(HIDE_LOADER)
                return response
            },
            error => {
                store.commit(HIDE_LOADER)
                return Promise.reject(error)
            }
        )
    }

    async get(uri, params = {}) {
        const res = await this.axios.get(uri, { params: params })
        return res.data
    }
}

export default new Request()
