<template>
	<div class="news">
		新闻：{{$route.params.id == undefined ? "暂无参数":$route.params.id}}
		{{$route.query.name == undefined||"" ? "":"传参方式2："+$route.query.name}}
	</div>
</template>

<script>
	
</script>

<style>
	
</style>