import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/isCustomElement',
    component: () => import('@/views/isCustomElement'),
  },
  {
    path: '/switchTabs',
    component: () => import('@/views/switchTabs'),
  },
  {
    path: '/test',
    component: () => import('@/views/test'),
  },
  {
    path: '/TableBug',
    component: () => import('@/views/TableBug'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to, form, next) => {
  next()
})

export default router
