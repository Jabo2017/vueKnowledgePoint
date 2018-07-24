<template>
	<div class="child">
		<div class="users"></div>
	</div>
</template>

<script>
	export default{
		name:'',
		//props:['users'],
		props:{
			users:{
				type:Array,
			},
			title:{
				type:String,
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			sayHi(){
				alert("我是Child Hi！");
			}
		}
	}
</script>

<style scoped>
	
</style>