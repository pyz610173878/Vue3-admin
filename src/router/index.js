import { createRouter, createWebHistory } from 'vue-router';

import baseRouters from './modules/index_back.js';

const routes = [...baseRouters];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;


// scrollBehavior函数是用来控制从一个路由过渡到另一个路由时页面应该如何滚动