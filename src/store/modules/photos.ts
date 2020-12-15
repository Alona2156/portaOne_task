import axios from 'axios';
import { Module } from 'vuex';
import { Photo, PhotosState, RootState } from '@/store/types';

const Photos: Module<PhotosState, RootState> = {
  namespaced: true,
  state: {
    photos: [] as Photo[],
    selectedPhoto: {} as Photo,
  },
  mutations: {
    getPhotos(state, data) {
      state.photos = data;
    },
    selectPhoto(state, id) {
      state.selectedPhoto = state.photos.find((el) => el.id === id);
    },
  },
  actions: {
    async getPhotos({ commit }) {
      const url = `${process.env.VUE_APP_API_URL}/photos`;
      const response = await axios.get(url);
      commit('getPhotos', response.data);
    },
  },
};

export default Photos;
