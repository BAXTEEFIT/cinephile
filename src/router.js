import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/films', name: 'films', component: () => import('@/pages/Films.vue')},
        {path: '/serials', name: 'serials', component:  () => import('@/pages/Serials.vue')},
        {path: '/search', name: 'search', component:  () => import('@/pages/Search.vue')},
        {path: '/movie/:id', name: 'movieid', component:  () => import('@/pages/FilmsId.vue')},
        {path: '/serial/:id', name: 'serialid', component:  () => import('@/pages/SerialsId.vue')},
    ]
})

export default routers