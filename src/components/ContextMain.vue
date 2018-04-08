<template style="height: 100%" >

  <el-container style="height: 100%" >
    <el-main>
      <el-header  id='header'>
        <context-header></context-header>
      </el-header>
      <el-main id="main">
        <query-bar style="padding: 0px 8px" ></query-bar>
        <div class="button-bar">
          <el-button size="mini" type="primary" @click="dialogVisible = true" icon="el-icon-plus">  </el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="70%"
            lock-scroll
            :before-close="handleClose">
            <span >这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
              <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
          <el-tooltip class="item" :disabled="del_num" effect="dark"  content="未选择" placement="top">
            <el-button size="mini" type="primary" @click="dialogVisible = true" icon="el-icon-edit">  </el-button>
          </el-tooltip>
          <el-popover
            ref="popover5"
            placement="top"
            width="160"
            v-model="visible2">

            <p>确定删除{{del_num}}条？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
            </div>
          </el-popover>
          <el-tooltip class="item" :disabled="del_num" effect="dark" content="未选择" placement="top">
            <el-button @click="checkAndAlert" size="mini" type="danger" icon="el-icon-delete"> </el-button>
          </el-tooltip>

        </div>

        <list-bar ></list-bar>
      </el-main>
    </el-main>
  </el-container>

</template>

<script>
  import QueryBar from './QueryBar'
  import ContextHeader from './ContextHeader'
  import ListBar from './ListBar'
  export default {
    components: {
      QueryBar,
      ContextHeader,
      ListBar
    },
    data(){
       return  {
         visible2: false,
         del_num: 0,
         dialogVisible: false,


       }
    },
    methods: {
      checkAndAlert : function () {
        if(this.del_num > 0) {
          this.visible2=true
        }
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            this.$message({
              type: 'info',
              size: 'mini',
              message: `取消编辑`
            });
          })
          .catch(_ => {});

      }
    },
		name: "context-main"
	}
</script>

<style scoped>
  #header {
    width: 100%;
    padding: 0;
    height: 50px;

  }
  .el-main {
    padding: 0;
    margin-right: 30px;
    overflow-x: hidden;
  }
  .button-bar {
    height: auto;
    width: 100%;
    float: left;
    padding: 15px 0px 12px 10px;
  }
  .el-button {
    margin: 5px;
  }
</style>
