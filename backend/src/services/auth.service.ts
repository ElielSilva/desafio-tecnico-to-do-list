import { User } from '../database/models/User.js';
// import { compareSync } from 'bcryptjs'
import { validateBodyRegister, validateBodylogin } from '../helpers/validations.js';
import { TokenService } from './token.service.js';
import HttpException from '../shared/HttpException.js';
import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';

interface IResponseRegister {
  token: string;
}

interface ILoginBody {
  email: string;
  password: string
}

export default class AuthService {
  private UserModel: User;
  private tokenService: TokenService;
  constructor() {
    this.UserModel = new User();
    this.tokenService = new TokenService();
  }

  public async register (user: any): Promise<IResponseRegister> {
    const isValidate = validateBodyRegister(user);

    if(isValidate) throw new HttpException(400, 'All fields must be filled');
    
    
    const existingUser = await User.findOne({ where: { email: user.email } });

    if (existingUser) {
      throw new HttpException(409, 'Email is already in use');
    }

    const hashedPassword = await this.tokenService.hashPassword(user.password);
    console.log(hashedPassword)

    const newUser = await User.create({
      ...user,
      password: hashedPassword,
    });

    const token = this.tokenService.generateToken(newUser.id, newUser.email)
    return { token };
  }
  
  public async login(RequestBody:ILoginBody): Promise<IResponseRegister> {
    
    const existingUser: User | null = await User.findOne({ where: { email: RequestBody.email } });
    
    if(!existingUser) throw new HttpException(404,'User not found');
    
    if(!this.tokenService.comparePasswords(RequestBody.password, existingUser?.password)) {
      throw new HttpException(401,'401 Unauthorized');
    };
    
    const token = this.tokenService.generateToken(existingUser.id, existingUser.email);
    return { token };
  };
}