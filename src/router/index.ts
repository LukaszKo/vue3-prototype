import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/dental'
    },
    {
      path: '/hospital',
      name: 'hospital',
      component: () => import('../views/Hospital.vue'),
    },
    {
      path: '/primary-care',
      name: 'primary-care',
      component: () => import('../views/PrimaryCare.vue'),
    },
    {
      path: '/dental',
      name: 'dental',
      component: () => import('../views/Dental.vue'),
    },
    {
      path: '/create',
      name: 'create',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreatePostView.vue'),
    },
    {
      path: '/login',
      name: 'signin',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

export default router;
