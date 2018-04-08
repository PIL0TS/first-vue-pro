<template>
  <el-row id = "row-header" style="height: 60%;padding-top: 12px;text-align: center">

    <el-col :span="6" class = "header-div" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.a}} </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>


    <el-col :span="3" :offset="5">
      <div>

      </div>
    </el-col>

    <el-col :span="3" style="float: right">
      <div>
      </div>
    </el-col>
    <el-col :span="24">
      <hr style="margin-top: -5px"/>
    </el-col>
  </el-row>
</template>

<script>
  import store from '@/store.js'
	export default {
    store,

    name: "context-header",
    data : {
    }

	}
</script>

<style scoped>
  #row-header {
    margin: 0px 8px;
  }
.header-div {
  height: 28px;
  text-align: center;
  font-family: PingFang SC;

}
 .el-breadcrumb{
  font-size: 10px;
}
h3 {
  /*font-family: PingFang SC;*/
  margin-top: 10px;
  height: 33px;
}
#row-header {

}
hr {

  border: 0;
  height: 1px;

  background-image: linear-gradient(to right, #f7fcff, #0b56ff, #f7fcff);
}
</style>
