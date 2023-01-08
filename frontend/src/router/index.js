import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from "../views/CategoriesView.vue";
import FilterView from "@/views/FilterView.vue";
import SearchView from "@/views/SearchView.vue";
import MangaView from "@/views/MangaView.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView
  },
  {
    path: '/filter',
    name: 'filter',
    component: FilterView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/manga',
    name: 'manga',
    component: MangaView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
