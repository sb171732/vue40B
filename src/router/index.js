import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../components/GroupList.vue')
  },
  {
    path: '/anim',
    name: 'anim',
    component: () => import(/* webpackChunkName: "about" */ '../components/AnimatedComp.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router