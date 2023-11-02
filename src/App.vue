<template>
  <div id="app">
      <CV></CV>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import UV from './components/UslovView.vue'
// import VM from './components/VModel.vue'
// import FV from './components/ForV.vue'
// import GL from './components/GroupList.vue'
// import MV from './components/MethodsV.vue'
import CV from './components/CalcV.vue'
export default {
  name: 'App',
  components: {
    CV
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
