const rewireResolve = require('./rewires/resolve')

module.exports = function override(config, env) {
  rewireResolve(config)
  return config
}
