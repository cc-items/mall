import Vue from "vue";
import VueRouter from "vue-router";
import rewritePush from "./api.js";
Vue.use(VueRouter);
rewritePush();
const Home = () => import("views/home/Home.vue");
const Category = () => import("views/category/Category.vue");
const Cart = () => import("views/cart/Cart.vue");
const Prifile = () => import("views/profile/Profile.vue");
const Detail = () => import("views/detail/Detail.vue");
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
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    name: "category",
    path: "/category",
    component: Category,
  },
  {
    name: "cart",
    path: "/cart",
    component: Cart,
  },
  {
    name: "prifile",
    path: "/profile",
    component: Prifile,
  },
  {
    name: "detail",
    path: "/detail",
    component: Detail,
    // props: true
    props: (route) => ({ query: route.query.iid }),
  },
];

const router = new VueRouter({
  routes,
  // mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // savedPosition 记录上次滚动的位置.手机端不可用.
    // if (savedPosition) {
    //   console.log(savedPosition)
    //   return savedPosition;
    // }
  },
});

export default router;
