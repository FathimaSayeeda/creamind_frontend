import Vue from "vue";
import Buefy from "buefy";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import auth from "../views/auth.vue";
import books from "../views/Books.vue";
import admin from "../views/admin.vue";

Vue.use(Buefy);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/auth",
    name: "auth",
    component: auth
  },
  {
    path: "/admin",
    name: "admin",
    component: admin
  },
  {
    path: "/books",
    name: "books",
    component: books
  }
];

const router = new VueRouter({
  routes
});

export default router;
