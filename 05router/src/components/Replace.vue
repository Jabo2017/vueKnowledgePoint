<template>
	<div class="replace">
		<p>返回上一级没有记录</p>
		<button @click="goReplace">指定跳转方式一</button>
		<button @click="goReplace2">指定跳转方式二</button>
	</div>
</template>

<script>
	export default {
		name:'Replace',
		data(){
			return{

			}
		},
		methods:{
			goReplace(){
				this.$router.replace("/index");
			},
			goReplace2(){
				this.$router.replace({name:'GoBack'});
			}
		}
	}
</script>

<style>
	
</style>