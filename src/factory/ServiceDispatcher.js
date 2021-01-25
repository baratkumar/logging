const LogsHandler = require('../common/LogsHandler')
const httpStatus = require('http-status')

class ServiceDispatcher {
  async dispatch(requestHelper, service, serviceType, h) {
    let errResponse
    let reply = h
    let addLogs = new LogsHandler(requestHelper, serviceType)
    try {
      let serviceResponse = await service.dispatch(requestHelper)
      reply = reply
        .response(serviceResponse.data)
        .type('application/json')
        .code(httpStatus.OK)
      reply.header('correlation-id', requestHelper.correlationId)
      addLogs.generateInfoLog()
      return reply
    } catch(error) {
      errResponse = addLogs.generateErrorLog(error)
    }
    return errResponse 
  }
}

module.exports = ServiceDispatcher