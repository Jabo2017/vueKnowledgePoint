<template>
	<div class="replace">
		<button @click="goReplace">指定跳转</button>
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
			}
		}
	}
</script>

<style>
	
</style>