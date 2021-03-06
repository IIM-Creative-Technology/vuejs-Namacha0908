import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  //{
    //path: '/',
   // name: 'Home',
   // component: Home
 // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/',
    name:'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/createpage',
    name: 'CreatePage',
    component: () => import('../components/CreatePage')

  }
  ,
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')

  }
]

const router = new VueRouter({
  routes
})

export default router