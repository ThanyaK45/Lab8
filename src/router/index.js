import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Review from '../views/Review.vue'
import NewsCard from '../components/NewsCard.vue'
import Product1 from '../views/Product1.vue'
import Product2 from '../views/Product2.vue'
import Product3 from '../views/Product3.vue'
import Product4 from '../views/Product4.vue'
import Product5 from '../views/Product5.vue'
import Product6 from '../views/Product6.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/review',
      name: 'review',
      component: Review
    },
    {
      path: '/news',
      name: 'news',
      component: NewsCard
    },
    {
      path: '/product1',
      name: 'product1',
      component: Product1
    },
    {
      path: '/product2',
      name: 'product2',
      component: Product2
    },
    {
      path: '/product3',
      name: 'product3',
      component: Product3
    },
    {
      path: '/product4',
      name: 'product4',
      component: Product4
    },
    {
      path: '/product5',
      name: 'product5',
      component: Product5
    },
    {
      path: '/product6',
      name: 'product6',
      component: Product6
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
