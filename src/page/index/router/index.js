import Vue from 'vue'
import Router from 'vue-router'
import home from '../../../components/home/home'
import plp from '../../../components/plp/plp'
import pdp from '../../../components/pdp/pdp'
import productIntroduction from '../../../components/product-introduction/product-introduction'
import userEvaluation from '../../../components/user-evaluation/user-evaluation'
import productMaintenance from '../../../components/product-maintenance/product-maintenance'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/plp',
      name: 'plp',
      component: plp,
    },
    {
      path: '/pdp',
      name: 'pdp',
      component: pdp,
      redirect: '/productIntroduction',
      children:[
          {
              path: '/productIntroduction',
              name: 'productIntroduction',
              component: productIntroduction,
          },
          {
              path: '/userEvaluation',
              name: 'userEvaluation',
              component: userEvaluation,
          },
          {
              path: '/productMaintenance',
              name: 'productMaintenance',
              component: productMaintenance,
          }
      ]
  },
  ]
})
