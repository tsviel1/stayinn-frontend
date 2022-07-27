import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.cmp.vue'
import explore from '../views/explore.cmp.vue'
import stayDetails from '../views/stay-details.cmp.vue'
import backOffice from '../views/back-office.cmp.vue'

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
    }, 
    {
      path: '/stay/:id',
      name: 'stay-details',
      component: stayDetails
    },
    {
      path: '/order',
      name: 'back-office',
      component: backOffice
    }
  ]
})
export default router
