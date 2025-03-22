import {NextFunction ,Request, Response } from 'express';
import AuthService from '../services/auth.service.js';


interface ILoginWithId  extends Request{
  id?:number
}

class AuthController {
  constructor(
    private authService = new AuthService()
  ) { }

  public register = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const { token } = await this.authService.register(req.body);
      res.status(200).json({ token });
    } catch (error) {
      next(error)
    }
  };

  public login = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const { token } = await this.authService.login(req.body);
      res.status(200).json({ token });
    } catch (error) {
      next(error)
    }
  };
}

export default AuthController;