// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//扩展：https://www.cnblogs.com/Abner5/p/7256043.html


// 全局守卫
router.beforeEach((to,from,next) =>{
	if(to.path == "/push" || to.path == "/replace"){
		console.log("全局守卫：进入指定跳转路由");
	} else{
		console.log("全局守卫：进入其他路由");
	}
	next();
})

//后置钩子
router.afterEach((to,from) =>{
	console.log("后置钩子：" + from.path)
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
