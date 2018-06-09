// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './informationDisclosure.vue'
// 引入ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css';
import $ from 'jquery'
import VueLazyload from 'vue-lazyload'
require('!style-loader!css-loader!less-loader!../../common/common1.less');
import router from './router'

Vue.config.productionTip = false
// 注意要写依赖
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
    error: '../static/img/error.jpg',//这个是请求失败后显示的图片
    loading: '../static/img/loading.gif',//这个是加载的loading过渡效果
    try: 2 // 这个是加载图片数量
})
// global.axios=axios
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
