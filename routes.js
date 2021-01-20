const glob = require('glob')

let routes = []
glob.sync('./src/modules/**/*Routes.js').forEach(route => {
  routes.push(require(route))
})

module.exports = routes