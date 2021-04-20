import App from './App.vue';
import * as VueRouter from 'vue-router'
import { store } from '@/store/store';
import { createApp } from 'vue';

const app = createApp(App);
const Battles = { template: '<Battles />' }
const Users = { template: '<Users />' }

const routes = [
  { path: '/', component: Battles },
  { path: '/battles', component: Battles },
  { path: '/users', component: Users },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

app.use(router)
app.use(store);
app.mount('#app');
