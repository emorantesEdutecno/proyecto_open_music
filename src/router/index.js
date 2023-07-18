import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RockView from '@/views/RockView.vue';
import RapView from '@/views/RapView.vue';
import PopView from '@/views/PopView.vue';
import NotFoundComponent from '@/components/NotFoundComponent.vue';

const routes = [
  {
    path: '/',
    name: 'rock',
    component: RockView
  },
  {
    path: '/pop',
    name: 'pop',
    component: PopView
  },
  {
    path: '/rap',
    name: 'rap',
    component: RapView
  },
  {
    path:'/:catchAll(.*)',
    name: 'notfound',
    component: NotFoundComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
