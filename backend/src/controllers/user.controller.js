const UserService = require('../services/user.service.js');


const UserController = {

  findUserById: async (RequestBody, res, next) => {
    try {
      // console.log("RequestBody", RequestBody.userId);
      const user = await UserService.findUserById(RequestBody);
      res.status(200).json({ user });
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController;