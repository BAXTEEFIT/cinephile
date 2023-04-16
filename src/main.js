import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/main.scss'
import store from '@/store/store'
import routers from '@/router'

const app = createApp(App)

app.use(store)
app.use(routers)

import BtnMore from '@/components/BtnMore.vue'
import Actors from '@/components/Actors.vue'
app.component('BtnMore', BtnMore)
app.component('Actors', Actors)
app.mount('#app')