const express = require('express');

const authController = require('../controllers/auth.controller.js');
const userController = require('../controllers/user.controller.js');
const taskController = require('../controllers/task.controller.js');
const authMiddleware = require('../middlewares/auth.middleware.js');

// const authController = new AuthController();
const authRouters = express.Router();

authRouters.use(express.json());

authRouters.post('/register', (req, res, next) => authController.register(req, res, next));

authRouters.post('/login', (req, res, next) => authController.login(req, res, next));

// const userController = new UserController();
const userRouters = express.Router();

userRouters.use(express.json());

userRouters.get('/', 
  authMiddleware,
  (req, res, next) => userController.findUserById(req, res, next)
);

// const taskController = new TaskController();
const taskRouters = express.Router();

taskRouters.use(express.json());

taskRouters.patch('/update/status/:taskId',
  authMiddleware,
  
  (req, res, next) => {
    taskController.updateStatusById(req, res, next)
  }
);

taskRouters.patch('/update/:taskId',
  authMiddleware,
  (req, res, next) => taskController.updateById(req, res, next)
);

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

module.exports = { authRouters, userRouters, taskRouters };
