import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import DraftEditor from '@/components/DraftEditor'
import ListTable from '@/components/ListTable'
import Layout from '@/views/Layout'
import ModifyDraft from '@/components/ModifyDraft'

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
      component: Layout,
      redirect:'/drafts/newDraft',
      children: [{
        path: 'newDraft',
        component: DraftEditor
      },{
        path: 'post/:id',
        component :ModifyDraft
      }]
    },
    {
      path: '/list',
      name: 'List',
      component: Layout,
      redirect:'/list/index',
      children: [{
        path:'index',
        component: ListTable
      }]
    }
  ]
})
