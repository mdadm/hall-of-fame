import App from './App.vue';
import * as VueRouter from 'vue-router'
import { store } from './store/store';
import { createApp } from 'vue';
import Battles from './components/Battles.vue';
import Users from './components/Users.vue';

const app = createApp(App);

const routes = [
  { path: '/', component: Battles },
  { path: '/battles', component: Battles },
  { path: '/users', component: Users },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

app.use(router);
app.use(store);
app.mount('#app');
