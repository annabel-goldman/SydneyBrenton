import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/SydneyBrenton/' : '/',
  assetsInclude: ['**/*.mov', '**/*.mp4', '**/*.heic', '**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.svg'],
})
