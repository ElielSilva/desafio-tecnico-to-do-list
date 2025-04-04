
const AuthService = require('../services/auth.service.js');


const AuthController = {
  
  register: async (req, res, next) => {
    try {
      const result = await AuthService.register(req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error)
    }
  },

  login: async (req, res, next) => {
    try {
      const result = await AuthService.login(req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error)
    }
  },
}

module.exports = AuthController;