import Vue from 'vue'
import VueRouter from 'vue-router'

const BookForm = () => import(/* webpackChunkName: "book" */'../components/books/crud/Book')
const BookList = () => import(/* webpackChunkName: "book" */'../components/books/BooksList')
const BookDetails = () => import(/* webpackChunkName: "book" */'../components/books/BookDetails')

Vue.use(VueRouter)

const routes = [
    {
        name:'books',
        path:'/',
        component: BookList
    },
    {
        name:'book-details',
        path:'/books/:id',
        component: BookDetails
    },
    {
        name:'new-book',
        path:'/book/new',
        component: BookForm
  
    }
    
]

 

const router = new VueRouter({
    mode: 'history',
    routes: routes
})


export default router;