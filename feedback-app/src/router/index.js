import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/index.vue')
const Feedbacks = () => import('../views/feedbacks/index.vue')
const Credentials = () => import('../views/credentials/index.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: { hasAuth: true }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: { hasAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
