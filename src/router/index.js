import { createRouter, createWebHistory } from "vue-router";

import Add from "@/views/Add";
import List from "@/views/List";

const routes = [
  // TODO: delete this afterward
  {
    path: "/",
    redirect: {
      path: "/add"
    }
  },
  {
    path: "/add",
    component: Add
  },
  {
    path: "/list",
    component: List
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
