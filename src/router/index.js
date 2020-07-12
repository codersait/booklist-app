import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/book',
    name: 'AddBook',
    component: () => import('../views/AddBook.vue'),
  },
  {
    path: '/book/:id', // '/edit-book/:id'
    name: 'EditBook',
    component: () => import('../views/EditBook.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
