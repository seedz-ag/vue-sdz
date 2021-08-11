import vue from 'rollup-plugin-vue'

import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import commonjs from '@rollup/plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

import { terser } from 'rollup-plugin-terser'

import babel from 'rollup-plugin-babel'

import replace from '@rollup/plugin-replace'

const config = {
  input: 'src/index.js',

  output: [
    { format: 'cjs', file: 'dist/js/bundle.cjs.js' },
    { format: 'esm', file: 'dist/js/bundle.esm.js' },
    {
      format: 'iife',
      file: 'dist/js/bundle.min.js',
      globals: { vue: 'Vue' },
      name: 'bundleee',
      plugins: [terser()]
    }
  ],

  plugins: [
    vue(),

    scss({
      sourceMap: true,
      outputStyle: 'compressed',
      output: 'dist/css/bundle.css',
      processor: () => postcss([autoprefixer()])
    }),

    replace({
      preventAssignment: true,
      // 'process.env.NODE_ENV': JSON.stringify('production'),
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true
    }),

    resolve(),
    commonjs(),

    babel({ exclude: 'node_modules/**' })
  ],

  external: ['vue']
}

export default config
