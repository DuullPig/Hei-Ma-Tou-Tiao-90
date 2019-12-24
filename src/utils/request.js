// 封装一个axios
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 设置常态值
// 请求拦截
axios.interceptors.request.use(function (config) {
  // 请求ok
  let token = window.localStorage.getItem('user-token') // 去token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config // 表示会用congig请求后台
}, function () {
  // 请求错误
})
export default axios
