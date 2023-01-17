import connection from '../models/connection';
import ProductModel from '../models/product.model';
import IProduct from '../interfaces/product.interface';

export default class ProductService {
  public productModel: ProductModel = new ProductModel(connection);

  public async createProduct(product: IProduct): Promise<IProduct> {
    const createdProduct = await this.productModel.createProduct(product);

    return createdProduct;
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const allProducts = await this.productModel.getAllProducts();

    return allProducts;
  }
}
