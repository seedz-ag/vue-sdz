import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import commonjs from '@rollup/plugin-commonjs'

const config = {
  inlineDynamicImports: true,

  external: ['vue', '@vue/composition-api'],

  input: 'src/index.js',

  output: [
    {
      format: 'cjs',
      file: 'dist/js/bundle.cjs.js'
    },
    {
      format: 'esm',
      file: 'dist/js/bundle.esm.js'
    }
  ],

  plugins: [
    commonjs(),

    vue({ css: false }),

    scss({ output: 'dist/css/bundle.css' })
  ]
}

export default config
