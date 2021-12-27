import Vue from "vue";
import VueRouter from "vue-router";
import rewritePush from "./api.js";
Vue.use(VueRouter);
rewritePush();
const Home = () => import("views/home/Home.vue");
const Category = () => import("views/category/Category.vue");
const Cart = () => import("views/cart/Cart.vue");
const Prifile = () => import("views/profile/Profile.vue");
const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: "/home",
    component: Home,
  },
  {
    name: 'category',
    path: "/category",
    component: Category,
  },
  {
    name: 'cart',
    path: "/cart",
    component: Cart,
  },
  {
    name: 'prifile',
    path: "/profile",
    component: Prifile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
