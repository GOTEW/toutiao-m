import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant核心组件库
import Vant from 'vant'
// 引入vant全局样式
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'
// 加载动态设置 rem 基准值
import 'amfe-flexible'
// 注册使用Vant的组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
