import { Router } from 'express';
import JWTvalidate from '../auth/JWTvalidate';
import validateOrder from '../middlewares/validateOrder';
import OrderController from '../controllers/order.controller';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAllOrders);

router.post('/', JWTvalidate, validateOrder, orderController.createOrder);

export default router;
