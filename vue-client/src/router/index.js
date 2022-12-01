import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustDataView from '../views/CustDataView.vue'
import inputItem from '../views/inputItem.vue'
import inputCustomer from '../views/inputCustomer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customer-list',
      name: 'customer',
      component: CustDataView
    },
    {
      path: '/sales',
      name: 'sales',
      component: CustDataView
    },
    {
      path: '/input-item',
      name: 'inputItem',
      component: inputItem
    },
    {
      path: '/input-customer',
      name: 'inputCustomer',
      component: inputCustomer
    }
    
  ]
})

export default router
