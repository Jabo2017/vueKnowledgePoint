<template>
	<div class="index">
		首页
	</div>
</template>

<script>
	//https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB
	export default{
		name:"Index",
		data(){
			return{
				msg:'Hi'
			}
		},
		beforeRouteEnter(to, from, next){
			// 在渲染该组件的对应路由被 confirm 前调用
    		// 不！能！获取组件实例 `this` 可以在next中做回调
    		// 因为当守卫执行前，组件实例还没被创建
    		next(vm => {
    			//把组件实例作为回调方法的参数
    			console.log(vm.msg)
    		})
		},
		beforeRouteLeave(to,from,next){
			// 导航离开该组件的对应路由时调用
    		// 可以访问组件实例 `this`
    		if(window.confirm("你要离开?") == true){
    			next()
    		}
		},
		methods:{

		}
	}
</script>

<style scoped>
	
</style>