
// 处理路由拦截器  导航守卫
import router from '../router'

// 全局守卫，当 路由发生变化是 这个方法里的回调函数就会使用
router.beforeEach(function (to, from, next) {
  // 权限拦截 认为有token让过去，没有的不让过去，判断要拦截的页面
  if (to.path.startsWith('/home')) {
    // 确定检查的范围，否则就放过
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next() // 放过
    } else {
      next('/login') // 直接放过
    }
  } else {
    next()
  }
})
