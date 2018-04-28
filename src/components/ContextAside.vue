<template>

  <div class = "aside" >

<!--    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>-->

    <!--router-->
    <transition name="el-zoom-in-top"   >
      <el-menu default-active="1-4-2"

               class="el-menu-vertical-demo menuTree"
               @open="handleOpen"
               @close="handleClose"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               :collapse="false"
               v-show='true'
      >
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
          <el-menu-item route="/manage/mine" index="3-1"@click="loadList('myInfo')" >我的信息</el-menu-item>
          <el-menu-item route="/manage/password" index="3-2" @click="loadList('myPsw')">修改密码</el-menu-item>

        </el-submenu>

      </el-menu>

    </transition>

  </div>

</template>

<script>
  import store from '@/store'
  export default {
    store,
    name: "context-aside",
    data() {
      return {
        showFlag : false,
        isCollapse: true,
        headerInfo : {
          'line' : ['综合管理', '路线管理'],
          'ticket' : ['综合管理', '车票管理'],
          'driver' : ['综合管理', '司机管理'],
          'bus' : ['综合管理', '汽车管理'],
          'administrator' : ['综合管理', '管理员账号管理'],
          'staff' : ['综合管理', '职工账号管理'],
          'users' : ['综合管理', '用户账号管理'],
          'myInfo' : ['综合管理', '我的信息'],
          'myPsw' : ['综合管理', '修改密码'],
          'manage' : ['综合管理'],
        },
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
        this.$store.commit('setHeader',{info: this.headerInfo[listName]})
        let vueSelf = this;
        vueSelf.$store.commit('refreshList', {listName:listName});
        vueSelf.$store.commit('refreshListData');
        vueSelf.$router.push({
          name: listName,
        })
      },


    },
    created: function () {
      this.$store.commit('setHeader',{info: this.headerInfo[this.$route.name]})
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
