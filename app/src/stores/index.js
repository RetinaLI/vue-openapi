import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const STORE_MUTATION_MAP = {
  UPDATE_CURRENT_USER: 'UPDATE_CURRENT_USER',
  UPDATE_VALID_MENUS: 'UPDATE_VALID_MENUS'
};

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    validMenus: []
  },
  mutations: {
    [STORE_MUTATION_MAP.UPDATE_CURRENT_USER] (state, user) {
      state.currentUser = { ...state.currentUser, ...user };
    },
    [STORE_MUTATION_MAP.UPDATE_VALID_MENUS] (state, menus) {
      state.validMenus = menus;
    }
  },
  strict: process.env.NODE_ENV !== 'production'
});
