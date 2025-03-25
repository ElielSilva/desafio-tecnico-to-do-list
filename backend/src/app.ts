import express, { Application, Request, Response } from 'express';
import cors from 'cors'; 

import { authRouters, userRouters, taskRouters } from './routers/routers.js' 

import httpErrorMiddleware from './middlewares/http.error.middleware.js'

class App {
  public app: Application;

  constructor() {
    this.app = express();

    this.config();
    
    this.app.get('/coffee', (req: Request, res: Response) => {
      res.status(418).json({ response: "coffee" });
    });

    this.app.use('/auth', authRouters);

    this.app.use('/users', userRouters);

    this.app.use('/tasks', taskRouters);
    
    this.app.use(httpErrorMiddleware);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    const corsOptions = {
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    };

    this.app.use(cors(corsOptions));

    this.app.use(express.json());
    this.app.use(accessControl);
    
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };