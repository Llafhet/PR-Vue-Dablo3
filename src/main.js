import '@/assets/css/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import fontAwesome from './plugins/fontAwesome.js'
import focus, {diablo} from './directives'//importamos la directiva


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(fontAwesome)
app.directive('focus', focus)//registramos la directiva
app.directive('diablo', diablo)
app.mount('#app')
