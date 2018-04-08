// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axiox from 'axios'
import config from './router/axios/config'
import storeConfig from 'store.js'
import axios from "axios/index";

Vue.config.productionTip = false

Vue.prototype.$ajax = axiox;

Vue.use(ElementUI);

global.bathPath = 'http://127.0.0.1:8082/'
axios.create({
  headers: 'Bearer '
});

new Vue({
  el: '#app',
  router,
  storeConfig,
  components: { App },
  template: '<App/>'
})


