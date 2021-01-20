const bunyan = require('bunyan')
const config = require('../../config/default.json')
const logger = bunyan.createLogger({ 
  name: `${config.appName}`,
  streams: [{
    level: 'error',
    path: 'logs/error.log'
  }]
})

module.exports = logger