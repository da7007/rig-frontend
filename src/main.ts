import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "bootstrap/dist/css/bootstrap.min.css";

router.beforeEach((to) => {
  const isAuthenticated: boolean = false;
  if (to.meta.requiresAuth && !isAuthenticated) {
    return {
      path: "/account",
    };
  }
});

createApp(App).use(router).mount("#app");
