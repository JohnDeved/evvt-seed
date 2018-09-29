import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuesax from 'vuesax'
import VueUi from '@vue/ui'

import 'material-icons/iconfont/material-icons.css'

Vue.use(VueUi)
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#42b983'
    }
  }
})

declare global {
  interface Window { vue: Vue }
}

Vue.config.productionTip = false

window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import 'vuesax/dist/vuesax.css'
import '@vue/ui/dist/vue-ui.css'
