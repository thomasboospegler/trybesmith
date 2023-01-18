import { Request, Response, NextFunction } from 'express';
import errorMap, { Errors } from '../utils/errorMap';
import { orderSchema } from './schemas';

export default (req: Request, res: Response, next: NextFunction): void | Response => {
  const orderData = req.body;

  const { error } = orderSchema.validate(orderData);

  if (error) {
    const { type, message } = error.details[0];

    return res.status(errorMap(type as Errors)).json({ message });
  }

  next();
};
