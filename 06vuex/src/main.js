// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import StoreConfig from './vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  StoreConfig,
  components: { App },
  template: '<App/>'
})
