import Vue from 'vue'
import Shop from './Shop'
import router from './router'

Vue.config.productionTip = false
new Vue({
  el: '#shop',
  router,
  template: '<Shop/>',
  components: { Shop }
})