import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/posts',
    name: 'mainPosts',
    component: () => import(/* webpackChunkName "PostsMain" */ '@/views/PostsMain.vue'),
    children: [
      {
        path: '',
        name: 'Posts',
        component: () => import(/* webpackChunkName "Posts" */ '@/components/Posts.vue'),
      },
      {
        path: ':id',
        name: 'Post',
        component: () => import(/* webpackChunkName "Post" */ '@/components/Post.vue'),
        beforeEnter(to, from, next) {
          if (store.state.Posts.posts.length) {
            store.commit('Posts/selectPost', +to.params.id);
            next();
          } else {
            store.dispatch('Posts/getPosts')
              .then(() => {
                store.commit('Posts/selectPost', +to.params.id);
                next();
              });
          }
        },
      },
    ],
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
