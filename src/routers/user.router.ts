import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateUser from '../middlewares/validateUser';

const router = Router();

const userController = new UserController();

router.post('/', validateUser, userController.createUser);

export default router;
