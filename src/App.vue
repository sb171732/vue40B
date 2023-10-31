<template>
  <div id="app">
      <GL></GL>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import UV from './components/UslovView.vue'
// import VM from './components/VModel.vue'
// import FV from './components/ForV.vue'
import GL from './components/GroupList.vue'

export default {
  name: 'App',
  components: {
    GL
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
