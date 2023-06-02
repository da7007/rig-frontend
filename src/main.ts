import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "bootstrap/dist/css/bootstrap.min.css";
import auth from "./auth/auth";

createApp(App).use(router).mount("#app");

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (auth.getAuth.isAuthenticated()) {
      next();
      return;
    }
    next("/account");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (auth.getAuth.isAuthenticated()) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});