import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Counter from '@/components/Counter'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
