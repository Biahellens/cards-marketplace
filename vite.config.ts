import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@contexts": "/src/contexts",
      "@utils": "/src/utils",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@models": "/src/models",
      "@services": "/src/services"
    }
  }
})
