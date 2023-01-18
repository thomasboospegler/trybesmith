import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProduct(productData: IProduct): Promise<IProduct> {
    const { name, amount } = productData;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, name, amount };
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const [allProducts] = await this.connection.execute('SELECT * FROM Trybesmith.products');

    return allProducts as IProduct[];
  }

  public async updateProducts({ orderId, id }: Partial<IProduct>): Promise<void> {
    await this.connection.execute(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [orderId, id],
    );
    // Retorna Void entao nao precisa de um retorno declarado
  }
}
