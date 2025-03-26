import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../shared/HttpException.js';

interface RequestWithUser extends Request {
  userId?: string;
}

const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  // console.log('passou no authMiddleware')
  // console.log(token)
  if (!token) {
    throw new HttpException(403, 'Token is required');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    
    req.userId = (decoded as { id: string }).id;
    next();
  } catch (error) {
    throw new HttpException(401, 'Invalid or expired token');
  }
};

export default authMiddleware;