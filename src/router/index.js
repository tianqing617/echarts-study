import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/echarts/simple',
    name: 'EchartsSimple',
    component: () => import('../views/echarts/simple.vue')
  },
  {
    path: '/echarts/data-zoom',
    name: 'EchartsDataZoom',
    component: () => import('../views/echarts/dataZoom.vue')
  },
  {
    path: '/echarts/data-zoom2',
    name: 'EchartsDataZoom2',
    component: () => import('../views/echarts/dataZoom2.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
