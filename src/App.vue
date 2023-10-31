<template>
  <div id="app">
      <FV></FV>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import UV from './components/UslovView.vue'
// import VM from './components/VModel.vue'
import FV from './components/ForV.vue'

export default {
  name: 'App',
  components: {
   
    FV
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
