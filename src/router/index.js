import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import login from '../views/login'
import Home2 from '../views/home/home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home' // 强制跳转
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '', // 二级路由地址跳转什么都不写 代表二级路由默认组件
      component: Home2
    }, {
      path: 'comment',
      component: () => import('../views/commcnt')
    }]

  }, {
    path: '/login',
    component: login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
