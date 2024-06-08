import { createRouter, createWebHistory } from 'vue-router';
import MyCards from '@pages/MyCards/MyCards.vue';
import Login from '@pages/Login/Login.vue';
import Register from '@pages/Register/Register.vue';
import SwapCards from '@pages/SwapCards/SwapCards.vue'
import AllCards from '@pages/AllCards/AllCards.vue';
import Shop from '@pages/Shop/Shop.vue'

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
    component: AllCards
  },
  {
    path: '/myCards',
    component: MyCards
  },
  {
    path: '/shop',
    component: Shop
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
