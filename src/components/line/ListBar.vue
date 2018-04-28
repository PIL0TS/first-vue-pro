<template id="listTemp">
  <div style="padding-left: 20px;  ">
    <transition name="el-zoom-in-top">
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
        v-loading = "false"
        @row-dblclick = 'showDetail'
        v-show = listChange
      >
        <el-table-column
          type="selection"
          :selectable = "selectable"
          row-key = 'id'
          width="40"

        >
        </el-table-column>
        <el-table-column
          label="出发地"
          prop="name"/>
        <el-table-column
          prop="sex"
          label="目的地"
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

      </el-table>
    </transition>
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
        pageInfo : {
		      listName : 'users',
		      countPerPage : 10,
          toPageNum : 1,
          currentPageNum : 1,
          maxPageNum : 1,
          maxRowNum : 10,
        },
        rowDetail : {},
        listChange : false,
      }
    },

    methods : {
		  initList : function () {
        // 取到路由带过来的参数
        let routerParams = this.$route.params
      },
      setItems : function() {
		    let thi = this;
        let data = thi.$store.state.listItems;
        for (let i =0; i < 10 - data.length; i++) {
          data.push([])
        }
        thi.listChange = true;
        return data;
      },
      selectable : function(row, index) {
        if (row.id) {
          return true;
        } else {
          return false;
        }
      },
      selectionChange : function(selection) {
		    this.selectedRows = selection;
		    this.$emit('updateSelections', selection);
      },
      showDetail : function (row, evebt) {
		    console.log(row)
        this.rowDetail = row;
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
