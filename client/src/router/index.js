import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Details from '@/components/Details'
import Archieve from '@/components/Archieve'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/archieve',
      name: 'Archieve',
      component: Archieve
    },
    {
      path: '/:id',
      name: 'Details',
      component: Details
    }
  ]
})
