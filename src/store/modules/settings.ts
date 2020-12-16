import { Module } from 'vuex';
import { SettingsState, RootState } from '@/store/types';

const Settings: Module<SettingsState, RootState> = {
  namespaced: true,
  state: {
    navDrawerType: 'normal',
  },
  mutations: {
    changeNavDrawerType(state, type: boolean) {
      state.navDrawerType = type ? 'mini' : 'normal';
    },
  },
};

export default Settings;
