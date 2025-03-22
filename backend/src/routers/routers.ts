import * as express from 'express';

import AuthController from '../controllers/auth.controller.js'

const authController = new AuthController();
const authRouters:express.Router = express.Router();

authRouters.use(express.json());

authRouters.post('/register', (req, res, next) => authController.register(req, res, next));

authRouters.post('/login', (req, res, next) => authController.login(req, res, next));

export { authRouters };
