<template style="height: 100%" >

  <el-container style="height: 100%" >
    <el-main>
      <el-header  id='header'>
        <context-header/>
      </el-header>
      <el-main id="main">
        <query-bar style="padding: 0px 8px" @query="setQueryParam"/>
        <div class="button-bar">
          <el-tooltip class="item" effect="dark" content="添加路线" placement="top">
            <el-button size="mini" type="primary" @click="openEditDialog()" icon="el-icon-plus">  </el-button>
            <el-button size="mini" type="primary"  @click="openEditDialog('update')" icon="el-icon-edit">  </el-button>
          </el-tooltip>
          <transition name="el-zoom-in-top">

            <el-dialog
              v-show="dialogVisible"
              :visible.sync="dialogVisible"
              width="70%"
              top="3%"
              lock-scroll
              :before-close="handleClose"
              v-loading = 'this.loading.dialogLoad'
            >
              <!--<el-tag type="info" style="position:relative; top: -30px" v-show="dialogVisible">{{dialogInfo.type == 'update' ? '修改用户信息' : '添加用户'}}</el-tag>
              -->
              <el-alert
                style="position:relative;
                  top: -30px;
                  width: 74%;
                  margin: auto;
                  font-size: 13px;
                  line-height: 18px;
                  height: 30px"

                center
                :closable="false"
                >
              {{dialogInfo.type == 'update' ? '修改用户信息' : '添加用户'}}
              </el-alert>
              <el-form inline="true" :model="tempEntity" ref="tempEntity" class="user-add-form" :rules="rules">
                <el-form-item typeof="string" style="width: 37%; margin:0px 5% 20px 5%"  prop="loginId">
                  <el-input style="width: 95%" maxlength="5"  v-model.number="tempEntity.loginId" size="mini" >
                    <template  slot="prepend">登录名</template>
                  </el-input>
                </el-form-item>

                <el-form-item style="width: 37%; margin:0px 5% 20px 5%" prop="role">
                  <el-select style="width: 144%" v-model="tempEntity.role" size="mini" clearable="true" placeholder="角色">

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
                </el-form-item>

                <el-form-item style="width: 37%; margin:0px 5% 20px 5%" prop="name">
                  <el-input style="width: 100%" v-model="tempEntity.name" size="mini" >
                    <template  slot="prepend">姓名</template>
                  </el-input>
                </el-form-item>

                <el-form-item style="width: 37%; margin:0px 5% 20px 5%" prop="sex">
                  <el-select style="width: 144%"  v-model="tempEntity.sex" size="mini" clearable="true" placeholder="性别">
                    <el-option label="男" value="男"/>
                    <el-option label="女" value="女"/>

                  </el-select>
                </el-form-item>
                <el-form-item :class="{'itemHidden' : dialogInfo.type == 'update'}"  style="width: 37%; margin:0px 5% 20px 5%" prop="password">
                  <el-input style="width: 100%" maxlength="20" type="password" v-model="tempEntity.password" size="mini" auto-complete="off" >
                    <template  slot="prepend">密码</template>
                  </el-input>
                </el-form-item>

                <el-form-item :class="{'itemHidden' : dialogInfo.type == 'update'}" style="width: 37%; margin:0px 5% 20px 5%" prop="checkPass">
                  <el-input style="width: 105%;" maxlength="20" type="password" v-model="tempEntity.checkPass" size="mini" auto-complete="off">
                    <template  slot="prepend">确认密码</template>
                  </el-input>
                </el-form-item>

                <el-form-item style="width: 37%; margin:0px 5% 20px 5%" prop="tel">
                  <el-input style="width: 100%" v-model="tempEntity.tel" size="mini" >
                    <template  slot="prepend">电话</template>
                  </el-input>
                </el-form-item>

                <el-form-item style="width: 37%; margin:0px 5% 20px 5%" prop="identifyNum">
                  <el-input style="width: 105%;" v-model="tempEntity.identifyNum" size="mini" >
                    <template  slot="prepend">身份证号</template>
                  </el-input>
                </el-form-item>

                <el-form-item style="width: 37%; margin:0px 5% 20px 5%" prop="birth">
                  <el-date-picker
                    v-model="tempEntity.birth"
                    style="width: 117%"
                    size="mini"
                    type="date"
                    placeholder="出生日期">
                  </el-date-picker>
                </el-form-item>

                <el-form-item style="width: 37%; margin:0px 5% 20px 5%" prop="mail">
                  <el-input  style="width: 105%;" v-model="tempEntity.mail" size="mini" >
                    <template  slot="prepend">电子邮箱</template>
                  </el-input>
                </el-form-item>


                <el-form-item style="width: 37%; margin:0px 5% 20px 5%;"  prop="address">
                  <el-input placeholder="备注信息" style="width: 370%;" rows="3"  type="textarea" v-model="tempEntity.address" size="mini" >

                  </el-input>
                </el-form-item>
              </el-form><!--:rules="rules"-->

              <!--                <el-cascader
								expand-trigger="hover"
								:options="city"
								v-model="tempEntity.address"
								@change="handleChange">
							  </el-cascader>
							-->





              <span slot="footer" class="dialog-footer">

              <el-button size="mini" @click="resetForm('tempEntity')">取 消</el-button>
              <el-button size="mini" type="primary"@click="submitForm('tempEntity')" >确 定</el-button>
            </span>
            </el-dialog>
          </transition>
          <el-tooltip class="item" effect="dark"
                      :content="selections.length === 1 ? '修改用户信息' : '请选择一条用户信息'" placement="top">
            <el-button size="mini" type="primary"  @click="openEditDialog('update')" icon="el-icon-edit">  </el-button>
          </el-tooltip>
          <el-popover
            ref="popover5"
            placement="top"
            width="160"
            v-model="visible2">

            <p>确定删除{{selections.length}}条？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="delIds()">确定</el-button>
            </div>
          </el-popover>
          <el-tooltip class="item" effect="dark" :content="selections.length > 0 ? '删除' : '请选择用户信息'" placement="top">
            <el-button @click="openEditDialog('del')" size="mini" type="danger" icon="el-icon-delete"> </el-button>
          </el-tooltip>

        </div>

        <list-bar @updateSelections = 'updateSelection' v-loading = 'this.$store.state.listLoading' />
        <el-pagination
          align="right"
          style="padding-top: 3%;"
          small="true"
          page-size=10
          background
          layout="prev, pager, next"
          :total=this.$store.state.listMaxRow
          :current-page.sync=pageInfo.pageNum
          @current-change = "changePage"
        >
        </el-pagination>
      </el-main>
    </el-main>
  </el-container>

</template>

<script>
  import QueryBar from '@/components/line/QueryBar'
  import ContextHeader from '@/components/ContextHeader'
  import ListBar from '@/components/line/ListBar'
  import util from '@/util/util.js'
  import store from '@/store'

  export default {
    store,
    components: {
      QueryBar,
      ContextHeader,
      ListBar,
      util,

    },
    data(){
      let th = this;
      let validatePass = (rule, value, callback) => {
        if (this.dialogInfo.type == 'update'){
          callback()
        } else {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (!this.tempEntity.checkPass) {
              console.log(this.tempEntity.checkPass)
            } else {
              this.$refs.tempEntity.validateField('checkPass');
            }
            callback();
          }
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (this.dialogInfo.type == 'update'){
          callback()
        } else {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.tempEntity.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        }
      };
      let validateLoginId = (rule, value, callback) => {
        if (th.tempEntity.id && th.selections[0].loginId == th.tempEntity.loginId) {
          callback();
        } else {
          th.$ajax({
            method: 'get',
            url: global.bathPath + th.urls.check + "/" +th.tempEntity.loginId,
            dataType:'JSON',
          }).then(function (res) {
            if (res['result'] == 'n') {
              callback(new Error(res['message']));
            } else {
              callback();
            }
          }).catch(function (err) {
            callback(new Error("用户名不可用"));
          })
        }

      };
       return  {
         tempParam : this.$store.state,
         query : {},
         urls : {
           update : 'users/update',
           save : 'users/add',
           del : 'users/delIds',
           check : 'users/check'
         },
         loading : {
           listLoad : false,
           dialogLoad : false,
         },
         dialogTitle:'',
         selections:[],
         visible2: false,
         del_num: 0,
         dialogVisible: false,
         tempEntity : {
           id:'',
           role : '',
           loginId : '',
           name : '',
           sex : '',
           address : '',
           tel : '',
           mail : '',
           identifyNum : '',
           birth : '',
           password : '',
           checkPass : '',

         },
         dialogInfo : {
           title : '',
           type : ''
         },
         rules : {
           role : [
             { required: true, message: '请选择角色', trigger: 'change' },

           ],
           loginId : [
             { required: true, message: '', trigger: 'blur', message: '请输入登录名' },
             { min: 3, max: 5,  message: '长度在 3 到 5 个字符', trigger: 'blur'  },
             { validator: validateLoginId, trigger: 'blur' }
           ],
           name : [
             { pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文',  trigger: 'blur' },
             { required: true, message: '', trigger: 'blur', message: '请输入姓名' }
           ],
           sex : [
             { required: true, message: '请选择性别', trigger: 'change' },
           ],
           address : [],
           tel : [],
           mail : [
             { type: 'email', required: true, message: '请输入正确格式', trigger: 'change' }

           ],
           identifyNum : [],
           birth : [],
           password : [
             { validator: validatePass, trigger: 'blur' }
           ],
           checkPass: [
             { validator: validatePass2, trigger: 'blur' }
           ],

         },
         pageInfo : {
           listName : 'users',
           countPerPage : 10,
           pageNum : 1,
           maxRow : 10,
         },
/*         city : util,*/
       }
    },
    methods: {
      openEditDialog(type) {
        this.dialogInfo['title'] = '添加用户';
        this.dialogInfo['type'] = 'save';

        if (type === 'update') {
          this.dialogInfo['title'] = '修改用户信息';
          this.dialogInfo['type'] = 'update';
          if (this.selections.length === 1) {
            this.tempEntity = JSON.parse(JSON.stringify(this.selections[0]));
            this.dialogVisible = true;
          }
        }
        else if (type === 'del') {
          if (this.selections.length > 0) {
            this.visible2 = true;
          }
        } else {
          this.dialogVisible = true;
        }
      },
      resetForm(formName) {
        console.log("reset -- " + this.$refs[formName]);
        this.$refs[formName].resetFields();
        for (var k in this.tempEntity) {
          this.tempEntity[k] = null;
        }
        this.dialogVisible = false;
      },
      handleClose(done) {

        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            this.resetForm('tempEntity');
            this.$message({
              type: 'info',
              size: 'mini',
              message: `取消编辑`
            });
          })
          .catch(_ => {});
      },

      submitForm(formName) {
        let thi = this;
        console.log(thi.urls[thi.dialogInfo.type]);
        this.$refs[formName].validate(function (flag, obj) {
          console.log(flag)
          if (flag) {
            thi.loading.dialogLoad = true;
            thi.$ajax({
              method: 'post',
              url: global.bathPath + thi.urls[thi.dialogInfo.type],
              data: thi.tempEntity,
              dataType:'JSON',
            }).then(function(res){
              // thi.$store.commit('fillList', res);
              console.log("result" + res);
              thi.$message({
                type: 'success',
                size: 'mini',
                message: `保存成功！`
              });
              thi.$store.commit('refreshList', {listName:'users'});

            }).catch(function(err){
              console.log("error : " + err);
              thi.$message({
                type: 'error',
                size: 'mini',
                message: `保存失败！`
              });
            }).finally(function (info) {
              thi.resetForm(formName);
              thi.loading.dialogLoad = false;
              thi.dialogVisible = false;
            });
          }
        })

      },
      updateSelection (sels) {
        this.selections = sels;
        console.log(this.selections)
      },
      delIds () {
        let th = this;
        let ids = [];


        th.selections.forEach((item) => {
          ids.push(item.id)
        });
        th.$ajax({
          method: 'post',
          url: global.bathPath + th.urls['del'],
          data: ids,
          dataType:'JSON',
        }).then(function(res){
          th.$message({
            type: 'success',
            size: 'mini',
            message: `删除成功！`
          });
        }).catch(function(err){
          console.log("error : " + err);
          th.$message({
            type: 'error',
            size: 'mini',
            message: `删除失败！`
          });
        }).finally(function () {
          th.visible2 = false;
          th.loading.listLoad = true;
          var ooo = function() {
            th.loading.listLoad = false;
          };
          th.$store.commit('refreshList', th.pageInfo);
        });
        return false;
      },
      setQueryParam (queryP) {
        this.query = {};
        for (var k in queryP) {
          if (queryP[k]) this.query[k] = queryP[k];
        }
        this.queryList();
      },

      queryList : function(num){
        if (!num) {
          num = 1;
          this.pageInfo.pageNum = 1;
        }
        console.log(this.pageInfo.pageNum)
        let thi = this;
        this.$ajax({
          method: 'post',
          url: global.bathPath + 'users/' + num,
          data : thi.query,
          dataType:'JSON',

        }).then(function (res) {
          thi.$store.commit('fillList', {arr:res.arr, curRow : 1});
          thi.$store.commit('maxRow', res.maxRow);

          console.log("mmmm" + res.maxRow)
        }).catch(function (err) {
          console.log(err)
        }).finally(function (info) {

        })

      },
      changePage : function (pageNum) {
        console.log(this.pageInfo.pageNum)
        this.queryList(pageNum)
      },















    },
    watch : {
      'state.tempParam' :  {
        handler(curVal,oldVal){
          this.pageInfo.pageNum = 1
          // this.$children[1].queryParam = {}
        },
        deep:true
      },
    },
    computed : {

    },
    created : function () {
      this.queryList(1)
    },
		name: "context-main",


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

.user-add-form {
  margin: 0 10%;
  width: auto;
}
.user-add-form > .el-form-item__content{
  width: 100%;
}
.editUl li {
  padding: 10px 0;
}
  .itemHidden {
    display : none;
  }
.dialogClass {
  padding-top: -30px;
}
</style>
