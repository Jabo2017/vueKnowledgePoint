<template>
	<div class="parent">
		<!-- parentResponse($event) :$event接收参数，可不写 -->
		<my-child  @parentFunc="parentResponse" />
	</div>
</template>

<script>
	import Child from './Child'
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		components:{
			'my-child':Child
		},
		methods:{
			//接收子组件参数
			parentResponse(data){
				alert("察看控制台");
				console.log(data)
			}
		}
	}
</script>

<style scoped>
	
</style>