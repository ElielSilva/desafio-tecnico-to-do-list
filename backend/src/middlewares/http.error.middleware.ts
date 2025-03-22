import { NextFunction, Request, Response } from "express";
import HttpException from "../shared/HttpException";

const httpErrorMiddleware = (error: Error,req: Request, res: Response, next: NextFunction) => {
  const { status, message } = error as HttpException;
  res.status( status || 500 ).json( { message } )
}

export default httpErrorMiddleware;
