import Vue from 'vue';
import i18n from './i18n';
import '@mdi/font/css/materialdesignicons.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$vuetify = {
  rtl: false,
  breakpoint: false,
};

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
