// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用路由模块
import VueResource from 'vue-resource'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
// 引入自定义css
import './assets/css/common.css'

Vue.use(iview)
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueResource)

// })
new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  components: { App }
})
