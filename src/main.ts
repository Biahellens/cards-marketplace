import { createApp } from 'vue';
import './style.css';
import router from './route';
import Home from '@pages/Home/Home.vue';
import Login from '@pages/Login/Login.vue';
import Register from '@pages/Register/Register.vue';
import App from './App.vue';

const app = createApp(App);

app.component('Home', Home);
app.component('Login', Login);
app.component('Register', Register);

app.use(router).mount('#app');
