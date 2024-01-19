import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Clavier from '../views/Clavier.vue'
import Journal from '../views/Journal.vue'
import Contact from '../views/Contact.vue'
import Form from '../views/Form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clavier',
      name: 'clavier',
      component: Clavier
    },
    {
      path: '/journal',
      name: 'journal',
      component: Journal
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    }
  ]
})

export default router
