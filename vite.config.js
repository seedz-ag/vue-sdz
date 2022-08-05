import path from 'path'
import { defineConfig } from 'vite'
import GlobPlugin from 'vite-plugin-glob'
import { createVuePlugin } from 'vite-plugin-vue2'
import { createSvgPlugin } from 'vite-plugin-vue2-svg'

export default defineConfig({
  base: 'https://seedz-ag.github.io/vue-sdz/',

  root: path.join(__dirname, '/'),

  build: {
    outDir: path.join(__dirname, 'docs')
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },

  // optimizeDeps: {
  //   exclude: ['vue-demi']
  // },

  plugins: [

    GlobPlugin(),
    createVuePlugin(),
    createSvgPlugin()
  ],

  server: { port: 8080 }
})
