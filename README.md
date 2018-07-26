# vueKnowledgePoint

## vue-router ：路由


### 添加sass 插件
>[参考](https://www.cnblogs.com/crazycode2/p/6535105.html)

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


