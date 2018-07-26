<template>
	<div class="about">
		<div class="left">
			<router-link class="about-li" :to="{name:'AboutUs'}">关于我们</router-link>
			<router-link class="about-li" :to="{name:'Resume'}">我的简历</router-link>
			<router-link class="about-li" :to="{name:'Experience'}">经历</router-link>
		</div>
		<div class="main">
			<router-view />
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
    .about{
    	position: relative;
    }
	.left{
		position: absolute;
		width: 200px;
		left: 0;
		top: 0;
		padding-top: 20px;
	}
	.about-li{
		display: block;
	}
	.main{
		padding-left: 200px;
	}

</style>