import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.cmp.vue'
import explore from '../views/explore.cmp.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: home
    },
    {
      path: '/stay',
      name: 'explore',
      component: explore
    }
  ]
})
export default router
