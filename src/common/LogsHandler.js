const logger = require('./logger')
const boom = require('@hapi/boom')
const httpStatus = require('http-status')

class LogsHandler {
  constructor(requestHelper, serviceType) {
    this.serviceType = serviceType
    this.requestHelper = requestHelper
  }
  generateInfoLog(infoitems) {
    let infoObject = {
      'statusCode': httpStatus.OK,
      'serviceName': this.serviceType,
      'correlation-id' : this.requestHelper.correlationId,
      ...infoitems
    }
    logger.info(infoObject)
    return
  }
  generateErrorLog(error) {
    let errorObject = error.request._timeout ? 
      boom.gatewayTimeout('Timeout') : boom.badGateway('Bad Gateway', this.error) 
    errorObject.output.headers = {
      'correlation-id' : this.requestHelper.correlationId
    }
    logger.error({...errorObject, serviceName: this.serviceType})
    return errorObject
  }
}

module.exports = LogsHandler