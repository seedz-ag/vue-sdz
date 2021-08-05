// const dotenv = require('dotenv-extended')
// const getenv = require('getenv')
const rollupPreprocessor = require('cypress-rollup-preprocessor')
// dotenv.load()

module.exports = (on, config) => {
  on('file:preprocessor', rollupPreprocessor())

  // const VUE_APP_REST_URL = getenv.string('VUE_APP_REST_URL')
  // config.env.VUE_APP_REST_URL = VUE_APP_REST_URL

  return config
}
