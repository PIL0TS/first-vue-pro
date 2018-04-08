<template>

  <div class = "aside" >

<!--    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>-->

    <!--router-->
    <el-menu default-active="1-4-2"

             class="el-menu-vertical-demo menuTree"
             @open="handleOpen"
             @close="handleClose"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             :collapse="false">
      <el-submenu index="1" >
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">综合管理</span>
        </template>
        <el-menu-item index="1-1" @click="loadList('line')" >路线管理</el-menu-item>
        <el-menu-item index="1-2" @click="loadList('ticket')" >车票管理</el-menu-item>
        <el-menu-item index="1-3" @click="loadList('driver')" >司机管理</el-menu-item>
        <el-menu-item index="1-4" @click="loadList('bus')">汽车管理</el-menu-item>

      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">账户管理</span>
        </template>
        <el-menu-item @click="loadList('administrator')" route="/manage/administrator" index="2-1">管理员账号管理</el-menu-item>
        <el-menu-item @click="loadList('staff')" route="/manage/staff" index="2-2">职工账号管理</el-menu-item>
        <el-menu-item @click="loadList('users')" route="/manage/user" index="2-3">用户账号管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">个人管理</span>
        </template>
        <el-menu-item route="/manage/mine" index="3-1" >我的信息</el-menu-item>
        <el-menu-item route="/manage/password" index="3-2">修改密码</el-menu-item>

      </el-submenu>



















    </el-menu>

  </div>

</template>

<script>
  import store from '@/store'
  export default {
    store,
    name: "context-aside",
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      loadList (listName) {
        let vueSelf = this;
        this.$ajax({
          method: 'post',
          url: global.bathPath + listName,

          data: {

          },
          dataType:'JSONP',
        }).then(function(res){
          vueSelf.$store.commit('fillList', res);
          console.log(res)
          console.log("state -- " + vueSelf.$store.state.listItems)
          vueSelf.$router.push({
            name: 'user',
            // params: {
            //   list : res,
            //   name : 12213123
            // }

          })
        }).catch(function(err){
          console.log(err)
        })

      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 101%;
  }
  .menuTree {

  }
  .el-menu-item {
    text-align: center;
  }
.aside {
  overflow-x: hidden;
  height: 100%;
}
</style>
