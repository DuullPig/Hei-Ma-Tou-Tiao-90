import layoutAside from './home/layout-aside.vue'
import layoutHeader from './home/layout-header.vue'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册一个全局组件
    Vue.component('layout-header', layoutHeader) // 注册一个全局组件
  }
}
