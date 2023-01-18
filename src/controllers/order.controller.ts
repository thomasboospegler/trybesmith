import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(
    private productService = new ProductService(),
    private orderService = new OrderService(),
  ) {}

  public getAllOrders = async (_req: Request, res: Response): Promise<void> => {
    const allOrders = await this.orderService.getAllOrders();
    
    res.status(200).json(allOrders);
  };

  public createOrder = async (req: Request, res: Response): Promise<void> => {
    const orderData = req.body;

    const { user: { id: userId }, productsIds } = orderData;
    
    const orderId = await this.orderService.createOrder(orderData);

    await this.productService.updateProducts(productsIds, orderId);

    res.status(201).json({ userId, productsIds });
  };
}
