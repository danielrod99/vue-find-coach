import { createStore } from 'vuex';
import coachesModules from './modules/coaches/index.js';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    coaches: coachesModules
  }
})
