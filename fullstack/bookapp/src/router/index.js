import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      logged: true
    },
    component: Home
  },
  {
    path: '/entrar',
    name: 'Login',
    component: Login
  },
  {
    path: '/registrar',
    name: 'Register',
    component: Register
  },
  {
    path: '/formulario',
    name: 'Form',
    meta: {
      logged: true
    },
    component: Form
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

/* Middleware authentication */
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.logged)) {
    if (!window.localStorage.token) {
      next('/entrar')
    } else {
      next()
    }
  }
  next()
})

export default router
