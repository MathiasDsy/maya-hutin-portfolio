import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/maya-hutin-portfolio/', // 👈 c'est cette ligne qui est cruciale
})
