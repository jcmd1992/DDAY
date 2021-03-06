// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// starts the app when app is ran
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store'
import Messages from '../src/components/Messages'
import {sync} from 'vuex-router-sync'
import VueChatScroll from 'vue-chat-scroll'
import Map from '../src/components/Map'
Vue.use(VueChatScroll)
Vue.component('Map', Map)
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Messages,
  components: { App },
  template: '<App/>'
})
