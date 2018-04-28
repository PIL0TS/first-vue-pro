<template>
  <div id="context" style="height: 100%;overflow-x: hidden" >

    <el-container id='contextBox' style="height: 105%;width:auto">
      <el-scrollbar style="height: 100%; width: 15%">
        <el-aside  id="aside" style="height: 100%; width: auto">

          <context-aside   style="height: 1100px" />
        </el-aside>

      </el-scrollbar>
      <el-container style="height: 100%" >

        <router-view />
      </el-container>
      <!--<el-footer id="footer"></el-footer>-->

    </el-container>
  </div>
</template>

<script>

  import QueryBar from "../components/QueryBar";
  import ButtonBar from "../components/ButtonBar";
  import ListBar from "../components/ListBar";
  import ContextHeader from "../components/ContextHeader";
  import ContextAside from "../components/ContextAside";
  import ContextMain from "../components/ContextMain";


  export default {

    components: {
      ContextMain,
      ContextAside,
      ContextHeader,
      ListBar,
      ButtonBar,
      QueryBar
    },
    name: "context",
    data() {

      return{
        arr : [2,3,4,5],
        menuHeight: [

        ]
      }
    },
    methods: {
      setHeigth : function () {

        this.menuHeight[0]=  window.screen.height + 20;
      },
      getHeight : function () {
        return "heigttSet"
      }
    },
    mounted() {
      this.setHeigth()
    },
    computed: {
      key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      }
    },

  }

</script>

<style scoped>
#aside {
  overflow-x: hidden;
  background-color: #545c64;
  margin-bottom: -10px;

}
#context {
  height: 100%;
}
. heigttSet{
  :height: menuHeight[0]
}
</style>
