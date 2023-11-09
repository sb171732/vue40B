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
  {
    path: '/el',
    name: 'el',
    component: () => import(/* webpackChunkName: "about" */ '../components/ElementUI.vue')
  },
  {
    path: '/anim',
    name: 'anim',
    component: () => import(/* webpackChunkName: "about" */ '../components/AnimatedComp.vue')
  },
  {
    path: '/check',
    name: 'check',
    component: () => import(/* webpackChunkName: "about" */ '../components/CheckList.vue')
  },
  {
    path: '/bloc',
    name: 'bloc',
    component: () => import(/* webpackChunkName: "about" */ '../components/BlocNot.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
