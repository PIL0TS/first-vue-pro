<template >
  <div>
    <div class="queryDiv" v-for="item in queryList" >

      <el-input v-if="item.type === 'input'" v-model="queryParam[item.name]" :onchange="doQueryParam()" size="mini" >
        <template  slot="prepend">{{item.text}}</template>
      </el-input>

      <el-select v-if="item.type === 'select'" v-model="queryParam[item.name]" size="mini" clearable="true" :placeholder="item.text">
        <el-option
          v-for="opt in item.options"
          :key="opt.code"
          :label="opt.text"
          :value="opt.code">

        </el-option>
      </el-select>
    </div>

    <el-button class="queryDiv" style="float: right;" size="mini" type="primary" v-if="queryList.length" icon="el-icon-search">查询</el-button>
  </div>
</template>

<script>
let tempList = [];
	export default {
		name: "query-bar",
    data(){
      return{
        queryList : [
          {
            id : 0,
            type : "input",
            name : "user.userName",
            text : "姓名"

          },
          {
            id : 1,
            type : "select",
            name : "user.sex",
            text : "性别",
            val : "234",
            options : [
              {
                code : 'male',
                text : '女'
              },
              {
                code : 'female',
                text : '男'
              },
              {
                code : 'other',
                text : '保密'
              }
            ]
          }
        ],
        queryParam : {

        }
      }
    },
    methods : {
      doQueryParam : function () {
        console.log(this.queryParam)
      }
    }
	}
</script>

<style scoped>
.queryDiv {
  width: auto;
  height: auto;
  float: left;
  margin: 5px 10px;

}
</style>
