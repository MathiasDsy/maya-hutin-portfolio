import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // ← ici on importe le router
import './assets/styles/base.css'


createApp(App)
  .use(router)                  // ← ici on l’ajoute à l’app
  .mount('#app')
