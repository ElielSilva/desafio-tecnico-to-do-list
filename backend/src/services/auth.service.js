const db = require('../database/models/index.js');
const { validateBodyRegister, validateBodylogin } = require('../utils/validations.js');
const TokenService = require('./token.service.js');
const HttpException = require('../utils/HttpException.js');

const AuthService = {

  register: async (user) => {
    const resultValidation = validateBodyRegister(user);
    if(resultValidation.length) {
      throw new HttpException(400, resultValidation)
    }
    
    const existingUser = await db.User.findOne({ where: { email: user.email } });

    if (existingUser) {
      throw new HttpException(409, 'Email is already in use');
    }

    const hashedPassword = await TokenService.hashPassword(user.password);
    // console.log(hashedPassword)

    const newUser = await db.User.create({
      ...user,
      password: hashedPassword,
    });

    const token = TokenService.generateToken(newUser.id, newUser.email)
    return { name: user.name, token: token };
  },
  
  login: async (RequestBody) => {
    const resultValidation = validateBodylogin(RequestBody);
    if(resultValidation.length) {
      throw new HttpException(400, resultValidation)
    }
    
    const existingUser = await db.User.findOne({ where: { email: RequestBody.email } });
    // console.log(existingUser)
    if(!existingUser) throw new HttpException(404,'User not found');
    
    const comparePasswords = await TokenService.comparePasswords(RequestBody.password, existingUser?.password)
    // console.log(comparePasswords)
    if(!comparePasswords) {
      throw new HttpException(401,'Unauthorized');
    };
    
    const token = TokenService.generateToken(existingUser.id, existingUser.email);
    return { name: existingUser.name, token: token };
  },
}

module.exports = AuthService;
