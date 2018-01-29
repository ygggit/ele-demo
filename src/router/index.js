import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index/index'
import foo from '../components/foo/foo'
import bar from '../components/bar/bar'
import aa from '../components/aa/aa'
import plp from '../page/plp/plp'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
      {
        path: '/',
        name: 'index',
        component: index
      },
      {
        path: '/plp',
        name: 'plp',
        component: plp,
      }
  ]
})
