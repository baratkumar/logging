const bunyan = require('bunyan')
const config = require('../../config/default.json')
const logger = bunyan.createLogger({ 
  name: `${config.appName}`,
  streams: config.logType === 'file' ? [{
    level: 'error',
    path: 'logs/error.log'
  }] : undefined
})

module.exports = logger