import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/page/Login';
import Context from '@/page/Context';
import ContextMain from '@/components/ContextMain'

import UserContextMain from '@/components/user/UserContextMain'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/manage',
      name: 'Context',
      component: Context,
      children: [
        {
          path: '/',
          name: 'home',
          component: ContextMain
        },
        {
          path: 'user',
          name: 'user',
          component: UserContextMain
        },
        {
          path: 'bus',
          name: 'bus',
          component: ContextMain
        },
        {
          path: 'line',
          name: 'line',
          component: ContextMain
        },
        {
          path: 'ticket',
          name: 'ticket',
          component:  ContextMain
        }
      ]
    }
  ]
})
