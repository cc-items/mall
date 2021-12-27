import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { get, post, instance } from '@/network/http'

Vue.config.productionTip = false

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$instance = instance

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
