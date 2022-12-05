import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/partials/layouts/Layout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/Home.vue"),
          props: true,
        },
        {
          path: "/blog",
          name: "blog",
          component: () => import("@/views/Home.vue"),
          props: true,
        },
        {
          path: "/blog/:id",
          name: "SinglePost",
          component: () => import("@/views/SinglePost.vue"),
        },
      ],
    },
  ],
});

export default router;
