import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index')
  },
  {
    path: '/call',
    name: 'call',
    component: () => import('@/views/Call')
  },
  {
    path: '/into',
    name: 'into',
    component: () => import('@/views/Into')
  },
  {
    path: '/onlineRecruitment',
    name: 'onlineRecruitment',
    component: () => import('@/views/OnlineRecruitment')
  },
  {
    path: '/serve',
    name: 'serve',
    component: () => import('@/views/Serve')
  },
  {
    path: '/docDownLoad',
    name: 'docDown',
    component: () => import('@/views/docDownload')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
