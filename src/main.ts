import { createApp } from 'vue';
import './style.css';
import router from './route';

// pages
import Home from '@pages/Home/Home.vue';
import Login from '@pages/Login/Login.vue';
import Register from '@pages/Register/Register.vue';
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

app.component('Home', Home);
app.component('Login', Login);
app.component('Register', Register);

app.use(router).mount('#app');
