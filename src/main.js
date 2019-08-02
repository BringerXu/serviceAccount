import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'weui'
import weui from 'weui.js'
import wx from 'weixin-js-sdk'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false
Vue.prototype.$weui = weui
Vue.prototype.$wx = wx

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
