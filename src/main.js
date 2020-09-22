import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // CSS重置
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import '@/styles/index.scss' // global css

import api from './api'// api

import './icons' // icon
import './permission' // permission control

Vue.use(ElementUI, {
  size: 'medium'
})

Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
