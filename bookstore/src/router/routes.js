import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/BookstoreSectionBooks'
import GetBook from '../components/BookstoreGetBook'

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [{
        path: '/',
        component: Home
    },
    {
        path:'/books/:idbook',
        component: GetBook
    }
]
})