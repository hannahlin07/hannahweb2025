import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Portfolio 子頁面
import DBProject from '../views/Portfolio/DBProject.vue'
import CollegeProject from '../views/Portfolio/CollegeProject.vue'
import BachelorProject from '../views/Portfolio/BachelorProject.vue'
import Internship from '../views/Portfolio/Internship.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/portfolio/db', name: 'db', component: DBProject },
    { path: '/portfolio/college', name: 'college', component: CollegeProject },
    { path: '/portfolio/bachelor', name: 'bachelor', component: BachelorProject },
    { path: '/portfolio/intern', name: 'intern', component: Internship },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
