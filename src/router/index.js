import Vue from 'vue'
// 引用路由模块
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import Hello from '@/components/Hello'

Vue.use(Router)
// 新建一个路由器实例 和配置路由规则
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/Hello',
      component: Hello
    }

  ]
})

