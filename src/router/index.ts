import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Product from '../pages/Product.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ERoute } from './utils'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: ERoute.dashboard, component: Dashboard },
      { path: '/product', name: ERoute.product, component: Product },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
