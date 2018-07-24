<template>
	<div class="parent">
		<button @click="callChild">父调用子方法</button>
		<my-child ref="myChild"/>
	</div>
</template>

<script>
	import Child from './Child'
	export default{
		name:'',
		data(){
			return{
				users:[
					{"name":"张三"},
					{"name":"李四"},
					{"name":"王五"},
				],
				title:'父传值给子'
			}
		},
		components:{
			'my-child':Child
		},
		methods:{
			callChild(){
				this.$refs.myChild.sayHi();
			}
		}
	}
</script>

<style scoped>
	
</style>