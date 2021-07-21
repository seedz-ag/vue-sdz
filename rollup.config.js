const vue = require('rollup-plugin-vue')

const config = {
  external: ['vue'],

  plugins: [ vue() ],

  input: 'src/index.ts',

  output: [
    { format: 'cjs', file: 'dist/bundle.cjs.js' },
    { format: 'esm', file: 'dist/bundle.esm.js' }
  ]
}

export default config