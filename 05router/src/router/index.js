import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import News from '@/components/News'
import GoBack from '@/components/GoBack'
import Error from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },{
    path: '/news',
    name: 'News',
    component: News
  },{
    path: '/about',
    name: 'About',
    component: About
  },{
    path: '/goback',
    name: 'GoBack',
    component:GoBack
  },{
    path: '/tag',
    name: 'Tag',
    redirect:'index'  //路由重定向
  },{
    path: '/index',
    redirect:'/'
  },{
  	path:'*',   //错误路由处理
  	name:'Error',
  	component:Error
  }]
})
