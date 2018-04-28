import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/page/Login';
import Context from '@/page/Context';
import ContextMain from '@/components/ContextMain'

import UserContextMain from '@/components/user/UserContextMain'
import LineContextMain from '@/components/line/LineContextMain'
import BusContextMain from '@/components/bus/BusContextMain'
import TicketContextMain from '@/components/ticket/TicketContextMain'



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
          path: 'users',
          name: 'users',
          component: UserContextMain
        },
        {
          path: 'bus',
          name: 'bus',
          component: BusContextMain
        },
        {
          path: 'line',
          name: 'line',
          component: LineContextMain
        },
        {
          path: 'ticket',
          name: 'ticket',
          component:  TicketContextMain
        }
      ]
    }
  ]
})
