import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Product from '../pages/Product.vue'
import ComingSoon from '../pages/ComingSoon.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ERoute } from './utils'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: ERoute.dashboard, component: Dashboard },
      { path: '/product', name: ERoute.product, component: Product },
      { path: '/lab-test', name: ERoute.labTest, component: ComingSoon },
      { path: '/appointment', name: ERoute.appointment, component: ComingSoon },
      { path: '/medicine-order', name: ERoute.medicineOrder, component: ComingSoon },
      { path: '/message', name: ERoute.message, component: ComingSoon },
      { path: '/payment', name: ERoute.payment, component: ComingSoon },
      { path: '/settings', name: ERoute.settings, component: ComingSoon },
      { path: '/help', name: ERoute.help, component: ComingSoon },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
