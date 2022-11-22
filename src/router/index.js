import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  // {
  //   path: '/wallet',
  //   name: 'about',
  //   component: Wallets
  // },
  // {
  //   path: '/chart',
  //   name: 'about',
  //   component: Chart
  // },
  // {
  //   path: '/transfer',
  //   name: 'about',
  //   component: Transactions
  // },
  // {
  //   path: '/settings',
  //   name: 'about',
  //   component: Settings
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
