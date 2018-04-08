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
            title="添加用户"
            :visible.sync="dialogVisible"
            width="70%"
            lock-scroll
            :before-close="handleClose">



            <ul class="editUl">
              <li style="" >

                <el-input style="width: 35%; " maxlength="5"  v-model.number="tempEntity.loginId" size="mini" >
                  <template  slot="prepend">登录名</template>
                </el-input>

                <el-select style="width: 35%; margin-left: 20%;"  v-model="tempEntity.role" size="mini" clearable="true" placeholder="角色">

                  <el-option

                    key="管理员"
                    label="管理员"
                    value="管理员"
                  />
                  <el-option
                    key="操作员"
                    label="操作员"
                    value="操作员"
                  />
                  <el-option
                    key="用户"
                    label="用户"
                    value="用户"
                  />
                  <el-option
                    key="司机"
                    label="司机"
                    value="司机"
                  />
                </el-select>

<!--border-color: #67c23a          border-color: #f56c6c; -->
              </li>
              <li CLASS="is-error ">
                <el-input style="width: 35%;" v-model="姓名" size="mini" >
                  <template  slot="prepend">密码</template>

                </el-input>

                <el-select style="width: 35%; margin-left: 20%;" v-model="tempEntity.name" size="mini" clearable="true" placeholder="性别">
                  <el-option
                    key="男"
                    label="男"
                    value="男"
                  />
                  <el-option
                    key="女"
                    label="女"
                    value="女"
                  />
                </el-select>

              </li>
              <li>
                <el-input style="width: 35%;" v-model="姓名" size="mini" >
                  <template  slot="prepend">姓名</template>
                </el-input>

                <el-date-picker
                  style="margin-left: 20%;width: 35%"
                  v-model="tempEntity.birth"
                  size="mini"
                  type="date"
                  placeholder="出生日期">
                </el-date-picker>



              </li>

              <li>

                <el-input style="width: 35%;" v-model="姓名" size="mini" >
                  <template  slot="prepend">电话</template>
                </el-input>

                <el-input style="width: 35%; padding-left: 20%" v-model="姓名" size="mini" >
                  <template  slot="prepend">身份证号</template>
                </el-input>
              </li>
              <li >
                <el-input style="width: 35%;" v-model="姓名" size="mini" >
                  <template  slot="prepend">地址</template>
                </el-input>

                <el-input style="width: 35%; padding-left: 20%" v-model="姓名" size="mini" >
                  <template  slot="prepend">电子邮箱</template>
                </el-input>

              </li>
            </ul>



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
  import QueryBar from '@/components/user/QueryBar'
  import ContextHeader from '@/components/ContextHeader'
  import ListBar from '@/components/user/ListBar'
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
         tempEntity : {
           role : '',
           loginId : '',

         },
         rules : [

           { required: true, message: '年龄不能为空'},
           { type: 'number', message: '年龄必须为数字值'}
         ],

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
.editUl {
  list-style: none;

  padding: 10px 20px;

}

.editUl li {
  padding: 10px 0;
}


</style>
