import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store';
import i18n from '../i18n';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/:lang',
    component: () => import(/* webpackChunkName "Main" */ '@/views/Main.vue'),
    beforeEnter(to, from, next) {
      const { lang } = to.params;
      const defaultLang = String(navigator.language).substr(0, 2);
      const supportedLangs = ['en', 'ru', 'ua'];
      if (!supportedLangs.includes(lang)) {
        const selectedLang = supportedLangs.includes(defaultLang)
          ? defaultLang
          : 'en';
        return next(selectedLang);
      }
      if (i18n.locale !== lang) {
        i18n.locale = lang;
      }
      document.documentElement.setAttribute('lang', lang);
      return next();
    },
    children: [
      {
        path: 'posts',
        name: 'mainPosts',
        component: () => import(/* webpackChunkName "PostsMain" */ '@/views/PostsMain.vue'),
        children: [
          {
            path: '',
            name: 'Posts',
            component: () => import(/* webpackChunkName "Posts" */ '@/components/Posts/Posts.vue'),
          },
          {
            path: ':id',
            name: 'Post',
            component: () => import(/* webpackChunkName "Post" */ '@/components/Posts/Post.vue'),
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
        path: 'photos',
        name: 'mainPhotos',
        component: () => import(/* webpackChunkName: "PhotosMain" */ '@/views/PhotosMain.vue'),
        children: [
          {
            path: '',
            name: 'Photos',
            component: () => import(/* webpackChunkName "Photos" */ '@/components/Photos/Photos.vue'),
          },
          {
            path: ':id',
            name: 'Photo',
            component: () => import(/* webpackChunkName "Photo" */ '@/components/Photos/Photo.vue'),
            beforeEnter(to, from, next) {
              if (store.state.Photos.photos.length) {
                store.commit('Photos/selectPhoto', +to.params.id);
                next();
              } else {
                store.dispatch('Photos/getPhotos')
                  .then(() => {
                    store.commit('Photos/selectPhoto', +to.params.id);
                    next();
                  });
              }
            },
          },
        ],
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "Settings" */ '@/views/Settings.vue'),
      },
    ],
  }];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
