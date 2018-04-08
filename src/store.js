import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  a : 111111,
  listItems : []

};
const mutations = {
  fillList(state, arr) {
    state.listItems = arr;
  },
  clearList(state) {
    state.listItems = [];
  }
};


export default new Vuex.Store({



  state,mutations
});

