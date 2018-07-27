import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/about/About'
import AboutUs from '@/components/about/AboutUs'
import Resume from '@/components/about/Resume'
import Experience from '@/components/about/experience/Experience'
import MiddleSchool from '@/components/about/experience/MiddleSchool'
import College from '@/components/about/experience/College'
import Work from '@/components/about/experience/Work'
import News from '@/components/News'
import GoBack from '@/components/GoBack'
import Replace from '@/components/Replace'
import Push from '@/components/Push'
import ScrollBehavior from '@/components/ScrollBehavior'
import Error from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: "history",
  scrollBehavior(to,from,savePosition){  //滚动行为
      //return {x:0, y:100}
      //return { selector:'.location'}
      if(savePosition){
        return savePosition
      } else{
        return { x:0, y:0 }
      }
  },
  routes: [{
    path: '/',
    name: 'Index',
    components:{
      default: Index,
      'NewsView':News,
      'PushView':Push
    }
  },{
    //path: '/news/:id?/:name?',  //在参数后面加个? => 没有参数时不会报错; 多个参数写法
    path: '/news/:id?',  //在参数后面加个? => 没有参数时不会报错
    name: 'News',
    component: News,
    beforeEnter:(to, from, next) => {   //路由独享守卫
      console.log("路由独享守卫进入："+ to.path);
      next();
    }
  },{
    path: '/about',
    name: 'About',
    component: About,
    redirect:'about/aboutus',
    children:[
      {path:'aboutus',name:'AboutUs',component:AboutUs},
      {path:'resume',name:'Resume',component:Resume},
      {path:'experience',name:'Experience',component:Experience, redirect:'experience/work',
        children:[
          {path:'middleschool',name:'MiddleSchool',component:MiddleSchool},
          {path:'college',name:'College',component:College},
          {path:'work',name:'Work',component:Work},
        ]
      }
    ]
  },{
    path: '/goback',
    name: 'GoBack',
    component:GoBack
  },{
    path: '/replace',
    name: 'Replace',
    component:Replace
  },{
    path: '/push',
    name: 'Push',
    component:Push
  },{
    path: '/sb',
    name: 'ScrollBehavior',
    component:ScrollBehavior
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
