import axios from 'axios';
import { Module } from 'vuex';
import { Photo, PhotosState, RootState } from '@/store/types';

const Photos: Module<PhotosState, RootState> = {
  namespaced: true,
  state: {
    photos: [] as Photo[],
    selectedPhoto: {} as Photo,
    photosPerPage: 24,
    currentPage: 1,
  },
  mutations: {
    getPhotos(state, data) {
      state.photos = data;
    },
    selectPhoto(state, id) {
      state.selectedPhoto = state.photos.find((el) => el.id === id);
    },
    updateCurrentPage(state) {
      state.currentPage += 1;
    },
    updatePhotosPerPage(state, num: number) {
      state.photosPerPage = num;
    },
  },
  actions: {
    async getPhotos({ commit, state }) {
      const url = `${process.env.VUE_APP_API_URL}/photos?_start=${(state.currentPage - 1) * state.photosPerPage}&_limit=${state.photosPerPage}`;
      const response = await axios.get(url);
      commit('getPhotos', response.data);
    },
  },
};

export default Photos;
