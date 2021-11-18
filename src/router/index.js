import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Basket from "@/views/Basket";
import Favorite from "@/views/Favorite";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: Home,
  },
  {
    path: "/basket",
    name: "basket",
    component: Basket,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: Favorite,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
