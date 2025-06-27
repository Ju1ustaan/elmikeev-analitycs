import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home-page/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/incomes',
      name: 'Доходы',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/incomes-page/IncomesPage.vue'),
    },
    {
      path: '/orders',
      name: 'Заказы',
      component: () => import('../pages/orders-page/OrdersPage.vue'),
    },
    {
      path: '/sales',
      name: 'Продажи',
      component: () => import('../pages/sales-page/SalesPage.vue'),
    },
    {
      path: '/stocks',
      name: 'Склады',
      component: () => import('../pages/stocks-page/Stocks-page.vue'),
    },
  
  ],
})

export default router
