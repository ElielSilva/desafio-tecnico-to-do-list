import {NextFunction ,Request, Response } from 'express';
import UserService from '../services/user.service.js';

interface RequestWithUser extends Request {
  userId?: string;
}

class UserController {
  constructor(
    private userService = new UserService()
  ) { }

  public findUserById = async (RequestBody: RequestWithUser, res: Response, next:NextFunction) => {
    try {
      console.log("RequestBody", RequestBody.userId);
      const user = await this.userService.findUserById(RequestBody);
      res.status(200).json({ user });
    } catch (error) {
      next(error)
    }
  };
}

export default UserController;