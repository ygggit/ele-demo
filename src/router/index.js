import Vue from 'vue'
import Router from 'vue-router'
import foo from '../components/foo/foo'
import bar from '../components/bar/bar'
import aa from '../components/aa/aa'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      {
        path: '/foo',
        name: 'foo',
        component: foo
      },
      {
        path: '/bar',
        name: 'bar',
        component: bar
      },
      {
        path: '/aa',
        name: 'aa',
        component: aa,
      },
      // {
      //   path:'*',
      //   redirect:'/foo'
      // }
  ]
})
