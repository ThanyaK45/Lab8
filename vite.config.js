import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/assets': 'src\assets', // เปลี่ยนเส้นทางตามโครงการของคุณ
    },
  },
})
