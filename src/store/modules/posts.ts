import axios from 'axios';
import { Module } from 'vuex';
import { Post, PostsState, RootState } from '@/store/types';

const Posts: Module<PostsState, RootState> = {
  namespaced: true,
  state: {
    posts: [] as Post[],
  },
  mutations: {
    getPosts(state, data) {
      state.posts = data;
    },
  },
  actions: {
    async getPosts({ commit }) {
      const url = `${process.env.VUE_APP_API_URL}/posts`;
      const response = await axios.get(url);
      commit('getPosts', response.data);
    },
  },
};

export default Posts;
