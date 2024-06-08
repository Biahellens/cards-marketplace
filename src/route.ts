import { createRouter, createWebHistory } from 'vue-router';
import Home from '@pages/Home/Home.vue';
import Login from '@pages/Login/Login.vue';
import Register from '@pages/Register/Register.vue';
import SwapCards from '@pages/SwapCards/SwapCards.vue'
import AllCards from '@pages/AllCards/AllCards.vue';

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
    path: '/home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
