import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
const state = {
  a : 111111,
  listItems : [],
  listMaxRow : 0,
  listLoading : false,
  tempParam : 1,
  header:{
    info:[],
  },

};
const mutations = {
  fillList(state, data) {
    state.listItems = data.arr;
  },
  setHeader(state, info) {
    console.log("info" + typeof(info) )
    console.log(info[0])
    state.header['info'] = info.info
  },
  clearList(state) {
    state.listItems = [];
  },
  refreshListData(state){
    console.log(3333)
    state.tempParam = -state.tempParam;
  },
  refreshList (state, pageInfo) {
    var store = this;
    state.listLoading = true;
    axios({
      method: 'get',
      url: global.bathPath + pageInfo['listName'],
      dataType:'JSON',
    }).then(function(res){
      store.state.listItems = res.arr;
      store.state.listMaxRow = res.count;
      state.listLoading = false;
    }).catch(function(err){
       console.log(err)
    })
  },

  maxRow (state, max) {
    state.listMaxRow = max;
  }


};


export default new Vuex.Store({



  state,mutations
});

