import { createApp } from 'vue';
import './style.css';
import router from './route';

// pages
import MyCards from '@pages/MyCards/MyCards.vue';
import Login from '@pages/Login/Login.vue';
import Register from '@pages/Register/Register.vue';
import SwapCards from '@pages/SwapCards/SwapCards.vue'
import AllCards from '@pages/AllCards/AllCards.vue';
import Shop from '@pages/Shop/Shop.vue'
import App from './App.vue';

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App);

const toastOptions: ToastContainerOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
};

app.use(Vue3Toastify, toastOptions);

app.component('MyCards', MyCards);
app.component('Login', Login);
app.component('Register', Register);
app.component('SwapCards', SwapCards);
app.component('AllCards', AllCards);
app.component('Shop', Shop);

app.use(router).mount('#app');
