<template>
  <div class="lifeCycle">
      <div>{{msg}}</div>
      <button @click="updateComponent">更新组件</button>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data () {
    return {
        msg:"在控制台中查看!"
    }
  },
  methods:{
      updateComponent(){
          this.msg="组件更新啦!在控制台中查看!"
      }
  },
  //生命周期函数
  beforeCreate(){
    console.log("组件实例化之前,执行的函数！");
  },
  created(){
    console.log("组件实例化完毕,页面还未显示！")
  },
  beforeMount(){
    console.log("组件挂载前,页面还未显示,但虚拟DOM已经配置!")
  },
  mounted(){
    console.log("组件挂载后,执行后页面显示!")
  },
  beforeUpdate(){
    console.log("组件更新前,页面未更新,但虚拟DOM已经配置！")
  },
  updated(){
    console.log("组件更新后,执行后页面显示!")
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
