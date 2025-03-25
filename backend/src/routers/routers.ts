import * as express from 'express';

import AuthController from '../controllers/auth.controller.js';
import UserController from '../controllers/user.controller.js';
import TaskController from '../controllers/task.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const authController = new AuthController();
const authRouters:express.Router = express.Router();

authRouters.use(express.json());

authRouters.post('/register', (req, res, next) => authController.register(req, res, next));

authRouters.post('/login', (req, res, next) => authController.login(req, res, next));

const userController = new UserController();
const userRouters:express.Router = express.Router();

userRouters.use(express.json());

userRouters.get('/', 
  authMiddleware,
  (req, res, next) => userController.findUserById(req, res, next)
);

const taskController = new TaskController();
const taskRouters:express.Router = express.Router();

taskRouters.use(express.json());

taskRouters.post('/create',
  authMiddleware,
  (req, res, next) => taskController.createTask(req, res, next)
);

taskRouters.get('/all',
  authMiddleware,
  (req, res, next) => taskController.findAllTask(req, res, next)
);

taskRouters.delete('/delete/:taskId',
  authMiddleware,
  (req, res, next) => taskController.deleteById(req, res, next)
);

export { authRouters, userRouters, taskRouters };
