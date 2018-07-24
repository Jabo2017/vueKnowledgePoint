<template>
  <div id="app">
    <app-header></app-header>
    <app-global></app-global>
  </div>
</template>

<script>
//局部组件
import Header from './components/public/Header'

export default {
  name: 'App',
  components: {
    'app-header':Header
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
