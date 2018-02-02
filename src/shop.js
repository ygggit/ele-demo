import Vue from 'vue'
import shop from './shop.vue'
import router from './router'

Vue.config.productionTip = false
new Vue({
  el: '#shop',
  router,
  template: '<shop/>',
  components: { shop }
})