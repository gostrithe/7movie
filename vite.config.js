import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // alias 自定义别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // @代表src目录
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api', import.meta.url))
    }
  }
})
