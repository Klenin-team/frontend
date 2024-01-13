import './assets/base.css'
import './assets/verdicts.css'
import './assets/fonts/inter.css'
import './assets/fonts/jetbrains.css'

import { createApp } from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
