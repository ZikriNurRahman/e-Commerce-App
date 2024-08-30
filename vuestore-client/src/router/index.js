import { createRouter, createWebHistory } from 'vue-router'
import Product from '../views/product/Index.vue'
import ProductDetail from '../views/product/Detail.vue'
import Cart from '../views/cart/Index.vue'
import NotFound from '../views/errors/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: Product
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
  ]
})

export default router
