import express, { Application, Request, Response } from 'express';

import { authRouters } from './routers/routers.js' 

import httpErrorMiddleware from './middlewares/http.error.middleware.js'

class App {
  public app: Application;

  constructor() {
    this.app = express();

    this.config();
    
    this.app.get('/coffee', (req: Request, res: Response) => {
      res.json({ response: "coffee" });
    });

    this.app.use('/auth', authRouters);
    
    this.app.use(httpErrorMiddleware);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };