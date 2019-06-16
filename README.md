# first-class

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 如何从零开始搭建一个vue项目

- 利用vue-cli 2.0搭建一个基本可以运行的项目；
- vue-router建立路由；
- 引入异步请求插件 vue-axios;
- 引入状态管理插件vuex；
- 处理移动适配；
- 组件注册；


## 项目结构：                    
- build                         // webpack开发打包相关配置
│ ├─build.js                        // 构建环境下的配置:loading动画;删除创建目标文件夹;webpack编译;输出信息
│ ├─check-versions.js               // node和npm的版本检查
│ ├─logo.png                        
│ ├─utils.js                        // 配置静态资源路径；cssLoaders用于加载.vue文件中的样式；styleLoaders用于加载不在.vue文件中的单独存在的样式文件
│ ├─vue-loader.conf.js              
│ ├─webpack-base.conf.js            // 基本的webpack配置.配置webpack编译入口/webpack输出路径和命名规则/模块resolve规则/不同类型模块的处理规则
│ ├─webpack-dev.conf.js             // 开发环境配置,在base.conf基础进一步完善;合并基础webpack配置;将hot-reload相关的代码添加到entry chunks;使用styleLoaders;配置Source Maps / webpack插件;
│ ├─webpack-prod.conf.js            // 生产环境配置,在base.conf基础进一步完善;合并基础webpack配置;使用styleLoaders;配置webpack输出/webpack插件;gzip模式下的webpack插件配置;webpack-bundle分析
├─config                        // 项目配置（端口号等）
│ ├─dev.env.js                      
│ ├─index.js                        // 用于定义开发环境和生产环境所需要的参数
│ ├─prod.env.js                     
├─dist                          // cnpm run build  项目打包后生成的文件夹
├─node_modules                  // cnpm install    项目依赖模块
├─src
│ ├─assets                      // 资源目录（放置一些图片等），这里的资源会被webpack构建
│ ├─components
│ ├─router                          // 路由
│ ├─App.vue                         // 根组件
│ ├─main.js                         // 入口js
├─static                        // 纯静态资源（不会变动的资源，如图片、字体），不会被webpack构建，直接被复制到打包目录dist/static
- .babelrc                      // 使用babel的配置文件，用来设置转码规则和插件
- .editorconfig                 // 代码的规范文件（规定使用空格或tab缩进，缩进的长度等，使用的话需要在编辑器下载对应的插件）
- .gitignore                    // 指定 git 忽略的文件，所有 git 操作均不会对其生效；
- .postcssrc.js                 // 指定使用的 css 预编译器，里面默认配置了 autoprefixer ，自动补全浏览器前缀
├─index.html
├─package-lock.json            // 确定当前安装的包的依赖，以便后续重新安装的时候生成相同的依赖，而忽略项目开发过程中有些依赖已经发生的更新；
├─package.json                 // 项目配置文件
└─README.md                    // 备注文件，对项目开发过程中需要注意的地方进行一些说明


2、一般怎么在当前基础上建立一个相对合理的目录结构；
views下放置各个页面和局部组件
components下放置项目的公共组件
router放置各个页面的路由配置路径

## 路由：
### 路由如何引入
Vue-cli2 构建时会自动引入路由在router文件下，它的核心就是一个实例化的vue-router的构造函数中传入一个一个属性为routes，值为数组的对象

### 介绍编程式导航和组件导航，以及参数如何传递；
#### push方法两种不同的传参形式
#### push方法和replace 方法的区别

### 介绍路由守卫的应用场景


## vue-axios :
### 如何引入；
   #### 最基础的用法就是 
   ```js
   import axios from 'axios'
   然后挂载在vue的原型或者window对象上，然后就可以进行二次封装。
   ```
 ### 高级用法——执行多个并发请求：
   ```js
   function getUserAccount() {
     return axios.get('/user/12345');
     }
   ```

### 如何进行请求拦截；
### 如何进行vue-axios的二次封装；


## vuex：
### 如何手动引入；
   ```js 
   npm安装，在src目录下建立一个store文件夹，store下有一个统一的index.js来统一引入各个模块，并且通过new Vuex.Store（{moduleA,moduleB}）来进行实例化，然后导出
   ```
### 如何分模块；
   ```js
   在store下建立存在不通模块的文件夹
   在每个文件下建立一个.js 的脚本文件，在里面export default{state:{},mutations:{},getters:{},actions:{}} 
   ```
### 如何对状态进行获取、提交，以及辅助函数的运用
  ```js
  首先在组件内引入mapMutations、mapState、mapActions 等

  computed 里面引入mapState,methods里面引入mapMutatons
  如果不采用辅助函数，
  this.$store.state.module.status;this.$store.commit('module/methodName',status)
 
  actions可以建立一个写入全局的异步请求方法，并且第一个参数是可选的，如果要在请求成功后去提交mutation，那么第一个参数{commit,state};
  mapActions的使用方法和mapMutations基本一致
  
  mapGetters的使用方法类似mapMutations，第一个参数是可选的命名空间，第二个是一个数组，里面是getters里面的方法名
  ```


五、移动适配
1、待定
六、组件注册：
1、局部组件注册；
2、全局组件注册；















