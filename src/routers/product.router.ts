import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validateProduct from '../middlewares/validateProduct';

const router = Router();

const productController = new ProductController();

router.post('/', validateProduct, productController.createProduct);

export default router;
