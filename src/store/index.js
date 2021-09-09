import { createStore } from 'vuex';
import coachesModules from './modules/coaches/index.js';

export default createStore({
  state() {
    return {
      userId:'c3'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    coaches: coachesModules
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
})
