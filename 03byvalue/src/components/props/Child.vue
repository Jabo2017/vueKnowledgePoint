<template>
	<div class="child">
		<div class="users">
			{{title}}:
			<a href="javascript:;" v-for="item in users"> {{item.name}}  </a>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'',
		//props:['users'],
		props:{
			users:{
				type:Array,
				default:[]
			},
			title:{
				type:String,
				require:true
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