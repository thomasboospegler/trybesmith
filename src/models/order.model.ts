import { Pool, ResultSetHeader } from 'mysql2/promise';
import IOrder, { INewOrder } from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const [orders] = await this.connection
      .execute(
        `SELECT o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders as o
      INNER JOIN Trybesmith.products as p
      ON p.order_id = o.id
      GROUP BY o.id`,
      );

    return orders as IOrder[];
  }

  public async createOrder(order: INewOrder): Promise<number> {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [order.user.id],
    );

    return insertId;
  }
}
