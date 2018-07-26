<template>
	<div class="experience">
		经历
		<div class="experience-type">
			<router-link class="experience-li" :to="{name:'MiddleSchool'}">中学</router-link>
			<router-link class="experience-li" :to="{name:'College'}">大学</router-link>
			<router-link class="experience-li" :to="{name:'Work'}">工作</router-link>
		</div>
		<div class="experience-content">
			<router-view />
		</div>
	</div>
</template>

<script>
	
</script>


<style>
	.experience-li{
		display: inline-block;
		padding: 10px 20px;
	}
</style>