import { createRouter, createWebHistory } from 'vue-router';
import MyCards from '@pages/MyCards/MyCards.vue';
import Login from '@pages/Login/Login.vue';
import Register from '@pages/Register/Register.vue';
import SwapCards from '@pages/SwapCards/SwapCards.vue';
import AllCards from '@pages/AllCards/AllCards.vue';
import Shop from '@pages/Shop/Shop.vue';
import { getCurrentInstance, ComponentInternalInstance } from 'vue';

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    component: SwapCards
  },
  {
    path: '/allCards',
    component: AllCards,
    meta: { requiresAuth: true }
  },
  {
    path: '/myCards',
    component: MyCards,
    meta: { requiresAuth: true }
  },
  {
    path: '/shop',
    component: Shop,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next({ path: '/login' });
  } else {
    next();
  }
});

export default router;
