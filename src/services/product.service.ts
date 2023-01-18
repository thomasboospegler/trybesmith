import connection from '../models/connection';
import ProductModel from '../models/product.model';
import IProduct from '../interfaces/product.interface';

export default class ProductService {
  public productModel: ProductModel = new ProductModel(connection);

  public async getAllProducts(): Promise<IProduct[]> {
    const allProducts = await this.productModel.getAllProducts();

    return allProducts;
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    const createdProduct = await this.productModel.createProduct(product);

    return createdProduct;
  }

  public async updateProducts(productsIds: Array<number>, orderId: number): Promise<void> {
    const productsPromises = productsIds
      .map(async (id) => this.productModel.updateProducts({ orderId, id }));

    await Promise.all(productsPromises);
  }
}
