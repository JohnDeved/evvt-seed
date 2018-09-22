import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuesax from 'vuesax'
import VueUi from '@vue/ui'

import '@vue/ui/dist/vue-ui.css'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

Vue.use(VueUi)
Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
