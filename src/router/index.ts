import { createRouter, createWebHashHistory, RouterOptions } from "vue-router";
import Index from "@/views/index.vue";

const routerOption: RouterOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      name: "index",
      path: "/",
      component: Index,
    },
  ],
};

const router = createRouter(routerOption);

export default router;
