import Vue from 'vue';
import Vuetify, {
  VApp,
} from 'vuetify/lib';
import i18n from './i18n';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  components: {
    VApp,
  },
});

new Vue({
  router,
  store,
  i18n,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount('#app');
