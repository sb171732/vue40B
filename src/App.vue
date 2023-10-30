<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <UV></UV>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UV from './components/UslovView.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    UV
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
