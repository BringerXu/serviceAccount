import Vue from 'vue'
import ListView from './ListView.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(ListView)
}).$mount('#app')
