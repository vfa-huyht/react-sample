const { merge } = require('webpack-merge')
const commongConfig = require('./webpack.common.js')

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commongConfig, envConfig)
  return config
}