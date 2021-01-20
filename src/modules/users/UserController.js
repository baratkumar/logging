const RequestHelper = require('../../common/RequestHelper')
const ServiceDispatcher = require('../../factory/ServiceDispatcher')
const UserService = require('./UserService')

class UserController {
  async invoke(request, h) {
    let requestHelper = new RequestHelper(request)
    let userService = new UserService()
    return new ServiceDispatcher().dispatch(requestHelper, userService, 'Get_User_Records', h)
  }
}

module.exports = UserController