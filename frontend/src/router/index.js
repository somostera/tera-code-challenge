import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../views/HomePage.vue";
import BookDetail from '../views/BookDetail.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    components: {
      default: HomePage
    }
  },
  {
    path:"/livro/:name",
    name: "BookDetail",
    components: {
      default: BookDetail
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;