<template>
	<div class="goBak">
		<button @click="goBack">返回上一页【路由】</button>
	</div>
</template>

<script>
	export default{
		name:'GoBack',
		data(){
			return{

			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	
</style>