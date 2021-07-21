import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import babel from 'rollup-plugin-babel'

import vue from 'rollup-plugin-vue'

import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import { terser } from 'rollup-plugin-terser'

const config = {
  external: ['vue'],

  input: 'src/index.js',

  output: [
    { format: 'cjs', file: 'dist/bundle.cjs.js' },
    { format: 'esm', file: 'dist/bundle.esm.js' }
  ],

  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    vue(),
    // vue({ css: false }),
    scss({
      output: 'dist/css/',
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css)
    }),
    terser()
  ],

  external: ['examples']
}

export default config
