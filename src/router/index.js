import Vue from 'vue';
import VueRouter from 'vue-router';
import Catalog from '../views/catalog.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/stream-detail',
    name: 'StreamDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/stream-detail.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
