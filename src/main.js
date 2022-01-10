import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { get, post, instance } from '@/network/http'
import toast from 'components/common/toast'
Vue.use(toast)
Vue.config.productionTip = false

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$instance = instance
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


