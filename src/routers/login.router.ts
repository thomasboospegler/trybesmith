import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateLogin from '../middlewares/validateLogin';

const router = Router();

const userController = new UserController();

router.post('/', validateLogin, userController.login);

export default router;
