import Vue from 'vue'
import Router from 'vue-router'
import ListView from '@/components/ListView.vue'
import UserPage from '@/components/UserPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ListView,
    },
    {
      path: '/user/:name',
      name: 'user',
      component: UserPage
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFoundPage
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
