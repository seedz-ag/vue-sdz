import vue from 'rollup-plugin-vue'

import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import commonjs from '@rollup/plugin-commonjs'

// import { terser } from 'rollup-plugin-terser'

import { babel } from '@rollup/plugin-babel'

const config = {
  input: 'src/index.js',

  output: [
    { format: 'cjs', file: 'dist/js/build.cjs.js' },
    { format: 'esm', file: 'dist/js/build.esm.js' },
    // {
    //   format: 'iife',
    //   file: 'dist/js/build.min.js',
    //   globals: { vue: 'Vue' },
    //   name: 'bundleee',
    //   plugins: [terser()]
    // }
  ],

  plugins: [
    vue(),

    scss({
      output: 'dist/css/build.css',
      outputStyle: 'compressed',
      processor: () => postcss([autoprefixer()])
    }),

    commonjs(),

    babel({
      babelHelpers: 'bundled'
    })
  ],

  // external: ['vue']
}

export default config
