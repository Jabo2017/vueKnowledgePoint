# vueKnowledgePoint

## vue-router ：路由


### 添加sass 插件
>[参考](https://www.cnblogs.com/crazycode2/p/6535105.html)

### [路由参考](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%AE%88%E5%8D%AB)

``` bash
1、cnpm install node-sass --save-dev
2、cnpm install sass-loader --save-dev
3、修改build/webpack.base.conf.js
```

### 路由参数
``` bash
1、方式 params

配置方式1：path: '/news/:id'  //在routes里面配置，id是参数，此时路由中需要有id的参数，否则会报错或找不到页面

配置方式2：path: '/news/:id?'  //在routes里面配置，id是参数，此时可以不传id参数

router-link 里面指定具体参数，key需要routes里面指定：
<router-link class="nav-li" :to="{name:'News',params:{'id':16}}">params传参</router-link>

2、传参 query：routes里面无需配置，参数随意
<router-link class="nav-li" :to="{name:'News',query:{'name':'Jabo'}}">query传参</router-link>

```

### 守卫

> 全局守卫
``` javascript
	router.beforeEach((to,from,next) =>{
		console.log(to)

		if(to.path == "/push" || to.path == "/replace"){
			console.log("全局守卫：进入指定跳转路由");
		} else{
			console.log("全局守卫：进入其他路由");
		}
		next();
	})

```

> 后置钩子
``` javascript
	router.afterEach((to,from) =>{
		console.log("后置钩子：" + from.path)
	})

```

> 路由独享守卫
``` javascript
	//在routes中
	beforeEnter:(to, from, next) => {   //路由独享守卫
      console.log("路由独享守卫进入："+ to.path);
      next();
    }

```

### 路由复用
``` javascript
routes 里面
  {
    path: '/',
    name: 'Index',
    components:{
      default: Index,
      'NewsView':News,
      'PushView':Push
    }
  }

```

### [扩展是否带花括号](https://www.cnblogs.com/Abner5/p/7256043.html)