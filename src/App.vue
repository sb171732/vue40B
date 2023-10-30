<template>
  <div id="app">
      <VM></VM>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import UV from './components/UslovView.vue'
import VM from './components/VModel.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // UV
    VM
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
