import { createRouter, createWebHistory } from 'vue-router';
import Home from '@pages/Home/Home.vue';
import Login from '@pages/Login/Login.vue';
import Register from '@pages/Register/Register.vue';

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/register',
    component: Register
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
