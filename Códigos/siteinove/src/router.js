import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Footer from './views/Footer.vue'
import Pillars from './views/Pillars.vue'
import HomeEntrep from './views/Home-entrep.vue'
import AboutEntrep from './views/About-entrep.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    // {
    //   path: '/footer',
    //   name: 'footer',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Footer.vue')
    // },
    // {
    //   path: '/pillars',
    //   name: 'pillars',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Pillars.vue')
    // },
    {
      path: '/home-entrep',
      name: 'home-entrep',
      component: () => import(/* webpackChunkName: "about" */ './views/Home-entrep.vue')
    },
    {
      path: '/about-entrep',
      name: 'about-entrep',
      component: () => import(/* webpackChunkName: "about" */ './views/About-entrep.vue')
    },
    {
      path: '/card',
      name: 'card-entrep',
      component: () => import(/* webpackChunkName: "about" */ './views/Cards-entrep.vue')
    }
  ]
})
