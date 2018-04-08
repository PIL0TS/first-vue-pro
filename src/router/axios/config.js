import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.0/';
axios.interceptors.request.use(
  config => {
    let tokenMsg = window.localStorage.getItem('auth');
    config.headers['Authorization'] = "token " + JSON.parse(tokenMsg)['token'];
    return config;
  },
  error => {
    console.log("config.js--axios.interceptors.request");
    return Promise.reject(error);
  }
);//请求拦截器
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  responseError => {

  }

);//响应拦截器
