const logger = require('./logger')
const boom = require('@hapi/boom')

class LogsHandler {
  constructor(error) {
    this.error = error
  }
  generateErrObject(requestHelper, serviceType) {
    let errorObject = boom.gatewayTimeout(`${serviceType}`)
    errorObject.output.headers = {
      'correlation-id' : requestHelper.correlationId
    }
    logger.error({ ...errorObject })
    return errorObject
  }
}

module.exports = LogsHandler