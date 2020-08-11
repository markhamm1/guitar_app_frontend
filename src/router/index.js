import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GuitarIndex from '../views/GuitarIndex.vue'
import GuitarShow from '../views/GuitarShow.vue'
import GuitarCreate from '../views/GuitarCreate.vue'
import GuitarUpdate from '../views/GuitarUpdate.vue'


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
    path: '/guitars',
    name: 'GuitarIndex',
    component: GuitarIndex
  },
  {
    path: '/guitars/new',
    name: 'GuitarCreate',
    component: GuitarCreate
  },
  {
    path: '/guitars/:id',
    name: 'GuitarShow',
    component: GuitarShow
  },
  {
    path: '/guitars/:id/edit',
    name: 'GuitarUpdate',
    component: GuitarUpdate
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
