import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductInfo from '../views/ProductInfo.vue'
// import ShoppingCart from '../views/ShoppingCart.vue'
// import Navbar from '../components/nav/Navbar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/Products/info/:id',
    name: 'ProductInfo',
    component: ProductInfo,
    props:true
  },
  // {
  //   path: '/Products/info/:id',
  //   name: 'ShoppingCart',
  //   component: ShoppingCart,
  //   props:true
  // },
  // {
  //   path: '/About',
  //   name: 'Home',
  //   component: Navbar
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
