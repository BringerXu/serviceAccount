import Vue from 'vue'
import Router from 'vue-router'
import ListView from '@/components/ListView.vue'
import UserPage from '@/components/UserPage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ListView,
    },
    {
      path: '/:name',
      name: 'user',
      component: UserPage
    },
  ]
})
