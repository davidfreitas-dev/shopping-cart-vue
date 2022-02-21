import './assets/css/global.css'
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'

Vue.config.productionTip = false

Vue.filter('formatValue', function(value) {
  return value.toLocaleString('en-US',{style: 'currency', currency: 'USD'})
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
