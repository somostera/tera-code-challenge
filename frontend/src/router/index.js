import Vue from 'vue';
import VueRouter from 'vue-router';
import Library from '../views/Library.vue';
import BookInfo from '../views/BookInfo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Library',
    component: Library,
  },
  {
    // Can't use slug because we wouldn't be able to fetch the book again.
    // So we pass the name of the book as a param and fetch it
    // from the (Vuex) stored books inside the component.
    path: '/:name',
    name: 'Book information',
    component: BookInfo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
