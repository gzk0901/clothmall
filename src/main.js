import Vue from 'vue'
import App from './App.vue'
// 导入路由进行挂载
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router // 挂载路由
}).$mount('#app')
