<template>
  <div id="app">
    <LifeCycle/>
  </div>
</template>

<script>
import LifeCycle from './components/LifeCycle'

export default {
  name: 'App',
  components: {
    LifeCycle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
