import connection from '../models/connection';
import IOrder, { INewOrder } from '../interfaces/order.interface';
import OrderModel from '../models/order.model';

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const orders = await this.orderModel.getAllOrders();

    return orders;
  }

  public async createOrder(order: INewOrder): Promise<number> {
    const orderId = await this.orderModel.createOrder(order);

    return orderId;
  }
}
