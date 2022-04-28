import { createApp } from 'vue'
import App from './App.vue'
import PageLoading from '@/components/PageLoading.vue'
import router from './router'

const app = createApp(App)

app.use(router).mount('#app')
app.component('PageLoading', PageLoading)
