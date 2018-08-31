import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import User from '@/components/user'
import Sort from '@/components/sort'
import SortAdd from '@/components/sortAdd'
import Login from '@/pages/login'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/user',
        name: 'User',
        component: User
      }, {
        path: '/sort',
        name: 'Sort',
        component: Sort},
      {
          path: '/sort/sortAdd',
          name: 'SortAdd',
          component: SortAdd,
        }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
