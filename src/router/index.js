import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import WalletsView from '../views/WalletsView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: DashboardView
  // },
  {
    path: '/wallet',
    name: 'about',
    component: WalletsView
  },
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
