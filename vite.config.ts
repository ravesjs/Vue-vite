import { defineConfig } from 'vite'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import vue from '@vitejs/plugin-vue'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      logs: true,
      routesFolder: [
        {
          src: 'src/pages',
        },
      ],
    }),
    AutoImport({
      imports: [
        VueRouterAutoImports, 
      ],
    }),
    vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    open: true,
    port: 5173,
    hmr: {
      host: 'localhost',
      port: 5173
    }
  }
})
