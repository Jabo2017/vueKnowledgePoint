<template>
  <div id="app">
    <nav class="nav-box">
        <router-link class="nav-li" to="/">首页</router-link>
        <router-link class="nav-li" to="/about">关于我们</router-link>
        <router-link tag="div" class="nav-li" to="/tag">tag和redirect重定向</router-link>
        <router-link class="nav-li" :to="{name:'News'}">name方法跳转</router-link>
        <router-link class="nav-li" :to="{name:'GoBack'}">返回上一页</router-link>
        <router-link class="nav-li" :to="{name:'Replace'}">指定跳转地址</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  *{
    margin:0;
    padding: 0;
  }
  .router-link-active{
    background-color: darken(lightgreen,10%) !important;
  }
  .nav-box{
    display: flex;
    flex-wrap: wrap;
    line-height: 46px;
  }
  .nav-box {
    .nav-li{
        display: flex;
        flex-basis: 120px;
        flex-grow: 1;
        justify-content: center;
        background-color: lightgreen;
        transition:all .3s;

        &:hover{
          background-color: darken(lightgreen,10%);
        }
    }
  }
</style>
