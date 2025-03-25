import { User } from '../database/models/User.js';
// import { compareSync } from 'bcryptjs'
import { validateBodyRegister, validateBodylogin } from '../helpers/validations.js';
import { TokenService } from './token.service.js';
import HttpException from '../shared/HttpException.js';

interface IResponseUserService {
  name: string;
  email: string;
}

interface RequestWithUser extends Request {
  userId?: string;
}

export default class UserService {
  private UserModel: User;
  private tokenService: TokenService;
  constructor() {
    this.UserModel = new User();
    this.tokenService = new TokenService();
  }

  public async findUserById(RequestBody: any): Promise<IResponseUserService> {
    console.log("user service",RequestBody.userId, RequestBody);
    // console.log("user service");
    const existingUser = await User.findOne({ where: { id: RequestBody.userId } });
    console.log(existingUser);

    if (!existingUser) {
      throw new HttpException(404, 'User not found');
    }

    const { name, email } = existingUser;

    return { name, email };
  }
  
}