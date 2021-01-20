const UserController = require('./UserController')
let userController = new UserController()

module.exports = {
  method: 'GET',
  path: '/',
  handler: async (request, h) =>  userController.invoke(request, h)
}