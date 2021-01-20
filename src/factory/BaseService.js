const logger = require('../common/logger')

class BaseService {
  constructor(serviceName) {
    this.logger = logger
    this.serviceName = serviceName
  }
}

module.exports = BaseService