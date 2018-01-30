import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Drafts from '@/views/Drafts'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/drafts',
      name: 'Drafts',
      component: Drafts
    }
  ]
})
