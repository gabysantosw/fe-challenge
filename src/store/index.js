import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async fetchStreams() {
      const request = await axios.get('api/streams.json');
      return request.data;
    }
  },
  modules: {}
});
