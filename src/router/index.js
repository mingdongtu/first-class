import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld'),
      meta: {
        title: "首页"
      }
    },
    {
      path: '/a',
      name: 'a',
      component: () => import('@/views/a'),
      meta: {
        title: 'A页面'
      }
    },
    {
      path: '/b',
      name: 'b',
      component: () => import('@/views/b'),
      meta: {
        title: 'B页面'
      }
    },
    {
      path: '/c',
      name: 'c',
      component: () => import('@/views/c'),
      meta: {
        title: 'B页面'
      }
    }

  ]
})
