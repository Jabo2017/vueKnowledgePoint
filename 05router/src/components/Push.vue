<template>
	<div class="push">
		<p>返回上一级有做记录</p>
		<button @click="goPush">指定跳转1</button>
		<button @click="goPush2">指定跳转2</button>
	</div>
</template>


<script>
	export default{
		name:'Push',
		data(){
			return{

			}
		},
		methods:{
			goPush(){
				this.$router.push('./index')
			},
			goPush2(){
				this.$router.push({name:'GoBack'})
			}
		}
	}
</script>


<style>
	
</style>