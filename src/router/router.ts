import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import AccountHome from "../components/account/AccountHome.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "App",
      path: "/",
      component: App,
      meta: { requiresAuth: true },
    },
    {
      name: "Account",
      path: "/account",
      component: AccountHome,
      meta: { guest: true },
    },
  ],
});
