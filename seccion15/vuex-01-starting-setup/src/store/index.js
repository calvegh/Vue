import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js'
import counterModule from './counter/index.js'
const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLogin: false, //LOGIN
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters 
});

export default store;
