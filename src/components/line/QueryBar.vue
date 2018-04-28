<template >
  <div>
    <div class="queryDiv" v-for="item in queryList" >

      <el-input v-if="item.type === 'input'" v-model="queryParam.name"  size="mini" >
        <template  slot="prepend">{{item.text}}</template>
      </el-input>

      <el-select v-if="item.type === 'select'" v-model="queryParam.sex"  size="mini" clearable="true" :placeholder="item.text">
        <el-option
          v-for="opt in item.options"
          :key="opt.code"
          :label="opt.text"
          :value="opt.code"
        >
        </el-option>
      </el-select>
    </div>

    <el-button class="queryDiv" @click="$emit('query', queryParam)" style="float: right;" size="mini" type="primary" v-if="queryList.length" icon="el-icon-search">查询</el-button>
  </div>
</template>

<script>
let tempList = [];
	export default {
		name: "query-bar",
    data(){
      return{
        tempParam : this.$store.state,
        queryParam : {

        }
      }
    },
    methods : {

    },
    watch : {
      'tempParam.tempParam' :  {
        handler(curVal,oldVal){
          console.log(222)
          this.queryParam = {}
        },
        deep:true
      },
    },
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
