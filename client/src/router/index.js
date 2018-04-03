import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
