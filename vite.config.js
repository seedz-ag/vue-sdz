import path from 'path'

import { defineConfig } from 'vite'
import GlobPlugin from 'vite-plugin-glob'
import { createVuePlugin } from 'vite-plugin-vue2'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

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
    createVuePlugin(),
    GlobPlugin(),

    Components({
      resolvers: [
        IconsResolver({ prefix: 'icon' })
      ]
    }),
    Icons({ compiler: 'vue2', autoInstall: false })
  ],

  server: { port: 8080 }
})
