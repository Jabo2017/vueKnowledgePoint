<template>
  <div id="app">
    <nav class="nav-box">
        <router-link class="nav-li" to="/">首页</router-link>
        <router-link class="nav-li" to="/about">关于我们</router-link>
        <router-link tag="div" class="nav-li" to="/tag">tag和redirect重定向</router-link>
        <router-link class="nav-li" :to="{name:'News'}">name方法跳转：新闻列表
          <div class="subLinks">
            <router-link class="nav-li" :to="{name:'News',params:{'id':16}}">params传参</router-link>
            <router-link class="nav-li" :to="{name:'News',query:{'name':'Jabo'}}">query传参</router-link>
          </div>
        </router-link>
        <router-link class="nav-li" :to="{name:'GoBack'}">返回上一页</router-link>
        <router-link class="nav-li" :to="{name:'Replace'}">指定跳转地址replace</router-link>
        <router-link class="nav-li" :to="{name:'Push'}">指定跳转地址push</router-link>
        <router-link class="nav-li" to="/about/resume" append>路由追加【不建议】</router-link>
        <router-link class="nav-li" :to="{path:'/about/aboutus'}" >路径方式,不如name</router-link>
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
        position:relative;
        display: flex;
        flex-basis: 120px;
        flex-grow: 1;
        justify-content: center;
        font-size:12px;
        background-color: lightgreen;
        transition:all .3s;

        &:hover{
          background-color: darken(lightgreen,10%);
        }
    }
  }

  .subLinks{
    position:absolute;
    left:0;
    width:100%;
  }
</style>
