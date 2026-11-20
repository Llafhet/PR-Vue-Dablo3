import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About/Index.vue')
  },
  { 
    path: '/region/:region/profile/:battleTag', 
    name: 'Profile',
    component: () => import('@/views/Profile/Index.vue')
  },
  { 
    path: '/region/:region/profile/:battleTag/hero/:heroId', 
    name: 'hero',
    component: () => import('@/views/Hero/Index.vue')
  },
  { 
    path: '/error', 
    name: 'error',
    component: () => import('@/views/Error/Index.vue')
  },
  { 
    path: '/:catchAll(.*)', 
    redirect: '/error' 
  }//redireccionar a la ruta error si no se encuentra la ruta

  //También pueden generarse dinámicamente:
  //component: () => import(`@/views/${viewName}/Index.vue`)
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router