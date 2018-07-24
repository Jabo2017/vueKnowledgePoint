<template>
	<div class="child">
		<div class="users">
			<button @click="callParent">子调用父方法</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:'',
		//props:['users'],
		props:{
			title:{
				type:String,
				require:true
			}
		},
		data(){
			return{
				myData:{
					"type":"String",
					"content":"HaHa"
				}
			}
		},
		methods:{
			callParent(){
				this.$emit("parentFunc",this.myData);
			}
		}
	}
</script>

<style scoped>
	
</style>