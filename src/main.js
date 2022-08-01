import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(Router)

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
