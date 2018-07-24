<template>
	<header class="header">
		<a class="header-li" href="javascript:;">ok0</a>
		<a class="header-li" href="javascript:;">ok1</a>
		<a class="header-li" href="javascript:;">ok2</a>
		<a class="header-li" href="javascript:;">ok3</a>
		<a class="header-li" href="javascript:;">ok4</a>
	</header>	
</template>

<script>
	export default {
		name:'Header',
		data(){
			return{
				
			}
		},
		components:{

		}
	}	
</script>


<style lang="scss" scoped>
	.header{
		display: flex;
		flex-wrap: wrap;
		text-align: center;
	}

	.header-li{
		flex-grow: 1;
		flex-basis: 200px;
		line-height: 46px;
		transition: all .3s;
		background-color: lightgreen;
	}

	.header-li:hover{
		background-color: darken(lightgreen,10%);
	}
</style>