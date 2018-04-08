<template>
  <div id="login">
    <el-card class="box-card" >
      <el-input size="small" style="margin-top: 15%"  class="login-input" v-model="loginId" placeholder="请输入账号">
        <template slot="prepend">账号</template>
      </el-input>
      <el-input size="small" class="login-input"  v-model="psw"  type="password" >
        <template slot="prepend">密码</template>
      </el-input>
      <router-link to="/manage" ></router-link>
        <el-button   style="margin-top: 50%" class="login-botton" size="medium" type="primary" @click="login">登录</el-button>

      <el-button   style="margin-top: 10%" class="login-botton" size="medium" type="primary" @click="login2">token</el-button>

    </el-card>
  </div>
</template>

<script>
import ElRow from 'element-ui/packages/row/src/row'
import ElInput from 'element-ui/packages/input/src/input'
import ElCard from 'element-ui/packages/card/src/main'
import ElButton from 'element-ui/packages/button/src/button'
import Context from './Context'

export default {
  components: {ElRow, ElInput, ElCard, ElButton, Context},
  name: 'login',
  data () {
    return {
      loginId: '',
      psw: ''
    }
  },
  methods: {
    login () {
      // window.localStorage.removeItem("token");
      // window.localStorage.removeItem("key");

      this.$ajax({
        method: 'post',
        url: global.bathPath + 'qqqq',

        data: {
          "loginId": this.loginId,
          "passWord": this.psw
        },
        dataType:'JSONP',
      }).then(function(res){
        console.log("token()--  ： res" + res)
        let storage = window.localStorage;
        let auth = {};
        if (res["token"]) {
          auth = {
            "token" : res["token"],
            "key" : res["randomKey"]
          };
        }



      }).catch(function(err){
        console.log(err)
      })
    },
    login2 ()  {
      // window.localStorage.removeItem("token");
      // window.localStorage.removeItem("key");

      this.$ajax({
        method: 'POST',
        url: global.bathPath + 'auth',

        data: {
          "loginId": this.loginId,
          "passWord": this.psw
        },
        dataType:'JSONP',
      }).then(function(res){
        console.log("login（）--登录  ： res" + res)
        let storage = window.localStorage;
        let auth = {};
        if (res["token"]) {
          auth = {
            "token" : res["token"],
            "key" : res["randomKey"]
          };
        }


        storage.setItem('auth', JSON.stringify(auth));

      }).catch(function(err){
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .box-card {
    margin-top: 6%;
    margin-left: 65%;
    width: 28%;
    height: 400px;
    background: -webkit-linear-gradient(#004c93, #bc8230);
    border: none;

    opacity:0.8;filter:alpha(opacity=50);
  }
  .login-input {
    margin: 5px;
    width: 100%;
  }
  .login-botton {
    width: 100%;
    margin-top: 10px;
    margin-left: 2%;
  }
  #login {
    background-image:url("../assets/img/bg1.jpg");
    background-size:100% 100%;
  }
</style>
