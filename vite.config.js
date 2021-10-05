import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  root: path.join(__dirname, '/'),

  build: {
    outDir: path.join(__dirname, 'docs')
  },

  base: '/vue-sdz/',

  plugins: [  createVuePlugin() ],

  server: { port: 8080 }
})
