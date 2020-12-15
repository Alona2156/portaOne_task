import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName "Posts" */ '@/views/Posts.vue'),
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import(/* webpackChunkName: "Photos" */ '@/views/Photos.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "Settings" */ '@/views/Settings.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
