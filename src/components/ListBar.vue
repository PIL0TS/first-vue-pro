<template id="listTemp">
  <div style="padding-left: 20px;  ">
    <el-table
      ref="multipleTable"
      :data="setItems()"
      tooltip-effect="dark"
      style="width: 100%;"
      @selection-change="selectionChange"
      header-cell-class-name = "listHeader"
      size="mini"
      fixed
      border
      stripe
    >
      <el-table-column
        type="selection"
        :selectable = "selectable"
        row-key = 'id'
        width="40"
      >
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name"/>
      <el-table-column
        prop="sex"
        label="性别"
      >
      </el-table-column>
      <el-table-column
        prop="loginId"
        label="登陆名"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column>

      </el-table-column>





    </el-table>

    <el-pagination
      align="right"
      style="padding-top: 3%;"

      small="true"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>

</template>

<script>
  import store from '@/store'
	export default {
    store,

		name: "list-bar",
    // created () {
    //   this.initList();
    // },
    data() {
		  return {
		    LinkItem : [],
        selectedRows : [],
      }
    },

    methods : {
		  initList : function () {
        // 取到路由带过来的参数
        let routerParams = this.$route.params
      },
      setItems : function() {
        // return this.$store.listItems
        let data = this.$store.state.listItems;
        for (let i =0; i < 10 - data.length; i++) {
          data.push([])
        }
        return data
      },
      selectable : function(row, index) {
        if (row.id) {
          return true;
        } else {
          return false;
        }
      },
      selectionChange : selection => {
		    this.selectedRows = selection;
		    console.log(this.selectedRows)
      }








    },

    computed : {

    },
    watch : {
      // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      // '$route': 'init'
    }
	}
</script>

<style scoped>
thead {
  background-color: black;

}
.el-table th {
  background-co: darkgrey;
}
.listHeader{
  background-color: blue;
}
</style>
