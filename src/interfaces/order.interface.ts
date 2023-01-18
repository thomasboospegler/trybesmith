import IUser from './user.interface';

export default interface IOrder {
  userId: number;
  id?: number;
}

export interface INewOrder {
  user: IUser;
  productIds: Array<number>;
}
