import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public createProduct = async (req: Request, res: Response): Promise<void> => {
    const productData = req.body;

    const createdProduct = await this.productService.createProduct(productData);

    res.status(201).json(createdProduct);
  };

  public getAllProducts = async (_req: Request, res: Response): Promise<void> => {
    const allProducts = await this.productService.getAllProducts();

    res.status(200).json(allProducts);
  };
}
