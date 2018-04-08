<template >
    <div id="app">

      <router-view style="height: 100%; overflow-y: hidden"/>
    </div>

</template>

<script>
import Login from './page/Login'
import Context from './page/Context'
export default {
  components: {Login, Context},
  name: 'App'
}
</script>

<style>
#app {
  margin: 0px;
  height: 100%;
}
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
</style>
