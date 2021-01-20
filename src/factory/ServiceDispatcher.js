const LogsHandler = require('../common/LogsHandler')
const httpStatus = require('http-status')

class ServiceDispatcher {
  async dispatch(requestHelper, service, serviceType, h) {
    let errResponse
    let reply = h
    try {
      let serviceResponse = await service.dispatch(requestHelper)
      reply = reply
        .response(serviceResponse.data)
        .type('application/json')
        .code(httpStatus.OK)
      reply.header('correlation-id', requestHelper.correlationId)
      return reply
    } catch(error) {
      let customError = new LogsHandler(error)
      errResponse = customError.generateErrObject(requestHelper, serviceType)
    }
    return errResponse 
  }
}

module.exports = ServiceDispatcher