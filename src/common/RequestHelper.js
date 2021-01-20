const { v4: uuidv4 } = require('uuid')
const config = require('../../config/default.json')

class RequestHelper {
  constructor(request, h) {
    this.request = request
    this.correlationId = request.headers.correlationId || `${config.appName}-${uuidv4()}`
  }
}

module.exports = RequestHelper