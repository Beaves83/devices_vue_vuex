import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import devices from './modules/devices';

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    devices,
  },
});

export default store;
