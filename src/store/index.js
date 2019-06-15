import Vue from 'vue';
import Vuex from 'vuex';
import a from './a/a.js';
import b from './b/b.js';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    a, b
  }
})