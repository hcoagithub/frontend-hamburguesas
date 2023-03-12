import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VistaCrear from '../views/VistaCrear.vue'
import VistaDetalle from '../views/VistaDetalle.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'crear',
    component: VistaCrear
  },{
    path:'/detalle/:id',
    name: 'detalle',
    component: VistaDetalle
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
