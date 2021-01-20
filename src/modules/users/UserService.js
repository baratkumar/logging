const axios = require('axios')
const BaseService = require('../../factory/BaseService')
const config = require('../../../config/default.json')

class UserService extends BaseService {
  constructor() {
    super('Get user data')
  }
  async dispatch() {
    let userResponse = await axios.get(`${config.users.basePath}/users`, {
      timeout: config.users.timeout,
      validateStatus: (status) => {
        return (status >= 200 && status < 300) || status === 304
      }
    })
    return userResponse
  }
}

module.exports = UserService