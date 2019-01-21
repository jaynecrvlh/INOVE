import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu from './components/Menu.vue'
import Navbar from './components/Navbar.vue'
import Login from './views/Login.vue'
import Cadastro  from './views/Cadastro.vue'
import Eventos from './views/Eventos.vue'
import Noticias from './views/Noticias.vue'
import Editais from './views/Editais.vue'
import Startups from './views/Startup.vue'
import Incubacao from './views/Incubacao.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: 'menu',
      name: 'menu',
      component: Menu
    },
    {
      path: 'navbar',
      name: 'navbar',
      component: Navbar
    },
    {
      path: '/login',
      name: 'login',
      component: Login

    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro

    },
    {
      path: '/eventos',
      name: 'eventos',
      component: Eventos

    },

    {
      path: '/noticias',
      name: 'noticias',
      component: Noticias
    },
    {
      path: '/editais',
      name: 'editais',
      component: Editais
    },
    {
      path: '/startups',
      name: 'startups',
      component: Startups
    },
    {
      path: '/incubacao',
      name: 'incubacao',
      component: Incubacao
    }

  ]
})
