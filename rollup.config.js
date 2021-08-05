import vue from 'rollup-plugin-vue'

import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import commonjs from '@rollup/plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

import { terser } from 'rollup-plugin-terser'

import babel from 'rollup-plugin-babel'

const config = {
  input: 'src/index.js',

  output: [
    { format: 'cjs', file: 'dist/js/bundle.cjs.js', globals: { vue: 'Vue' } },
    { format: 'esm', file: 'dist/js/bundle.esm.js', globals: { vue: 'Vue' } },
    { format: 'iife', file: 'dist/js/bundle.min.js', globals: { vue: 'Vue' }, plugins: [terser()] } ],

  plugins: [
    vue(),

    scss({
      sourceMap: true,
      outputStyle: 'compressed',
      output: 'dist/css/bundle.css',
      processor: () => postcss([autoprefixer()])
    }),

    resolve(),
    commonjs(),

    babel({ exclude: 'node_modules/**' })
  ],

  external: ['vue']
}

export default config
