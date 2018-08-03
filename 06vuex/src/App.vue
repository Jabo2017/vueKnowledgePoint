<template>
  <div id="app">
    <div class="nav-box">
      <router-link class="nav-li" to="/">首页</router-link> 
      <router-link class="nav-li" to="/counter">Counter</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  
}
</script>

<style>
    
</style>
