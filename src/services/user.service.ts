import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser from '../interfaces/user.interface';

export default class UserService {
  public userModel: UserModel = new UserModel(connection);

  public async createUser(product: IUser): Promise<IUser> {
    const createdUser = await this.userModel.createUser(product);

    return createdUser;
  }

  public async getUser(password: string): Promise<IUser | null> {
    const user = await this.userModel.getUser(password);
    
    return user;
  }
}
