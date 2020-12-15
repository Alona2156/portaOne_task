import Vue from 'vue';
import Vuex from 'vuex';
import Posts from '@/store/modules/posts';
import Photos from '@/store/modules/photos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Posts,
    Photos,
  },
});
