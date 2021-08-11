// const path = require('path')

module.exports = {
  entry: 'examples/main.js',

  // publicFolder : 'static',

  output: {
    dir: 'docs',
    minimize: true,
    // sourceMap: false,
    fileNames: {
      js: 'poi.js'
    },
    html: {
      filename: 'index.html'
    },
    moduleName: 'SeedzAg'
    // publicUrl: 'dominio-seedz.com.br'
  },

  // chainWebpack(config) {
  //   config.resolve.alias.set('@seedz-ag/vue-sdz$', path.resolve('src/index.js'))
  // }
}
