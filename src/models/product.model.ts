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
}
