import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/about',
        component: () => import('../views/About.vue')
      },
      {
        path: '/products',
        name: '產品列表',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/car',
        component: () => import('../views/Car.vue')
      }
    ]
  },
  {
    path: '/manage',
    component: () => import('../views/manage/Dashboard.vue'),
    children: [
      {
        path: 'productlist',
        component: () => import('../views/manage/Productlist.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/manage/Coupons.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
