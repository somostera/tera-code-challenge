import Vue from 'vue'
import VueRouter from 'vue-router'
import {userKey} from '../../global'

const BookForm = () => import(/* webpackChunkName: "book" */'../components/books/crud/Book')
const BookList = () => import(/* webpackChunkName: "book" */'../components/books/BooksList')
const BookDetails = () => import(/* webpackChunkName: "book" */'../components/books/BookDetails')
const SignUp = () => import(/* webpackChunkName: "auth" */'../components/user/SignUp')
const SignIn = () => import(/* webpackChunkName: "auth" */'../components/user/SignIn')

Vue.use(VueRouter)

const routes = [
    {
        name:'books',
        path:'/',
        component: BookList,
        meta: {
            requiresAuth: true
        }  
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
  
    },
    {
        name:'signup',
        path: '/signup',
        component: SignUp,
        meta: {
            requiresAuth: false
          }
  
    },{
        name: 'signin',
        path: '/signin',
        component: SignIn,
        meta: {
            requiresAuth: false
          }
  
    }
    
]

 

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

router.beforeEach((to, from, next) => {
    
    if(to.matched.some(record => record.meta.requiresAuth)) {

        if (localStorage.getItem(userKey) == null) {

            next({
                path: '/signin',
                params: { nextUrl: to.fullPath }
            })
        } else{
            next()
        }
    }
    else {
        next()
    }
})


export default router;