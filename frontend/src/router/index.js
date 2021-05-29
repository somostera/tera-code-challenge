import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'book',
        component: () => import('@/views/Books.vue'),
    },
    {
        path: '/livro/:id',
        name: 'book-detail',
        component: () => import('@/views/BookDetail.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
