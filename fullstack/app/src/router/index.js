import Vue from "vue";
import Router from "vue-router";
import createRouter from "./utils";
import Book from "@/pages/Book.vue";
import Books from "@/pages/Books.vue";

Vue.use(Router);

const routes = [];

routes.push(createRouter("book", Book));
routes.push(createRouter("", Books, "books"));

const router = new Router({
  routes,
});

export default router;
