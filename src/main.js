import { createApp } from 'vue'
import * as filters from './filters'
import '../src/assets/index.css'
import '../src/assets/style.css'
import { createPinia } from 'pinia'
import router from './router/index'
import { IonicVue } from '@ionic/vue';
import App from './App.vue'
import './registerServiceWorker'



const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$filters = filters
app.use(pinia)
app.use(router)
app.use(IonicVue)
app.mount('#app')
