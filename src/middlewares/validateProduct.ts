import { Request, Response, NextFunction } from 'express';
import { productSchema } from './schemas';
import errorMap, { Errors } from '../utils/errorMap';

export default (req: Request, res: Response, next: NextFunction): Response | void => {
  const productData = req.body;

  const { error } = productSchema.validate(productData);

  if (error) {
    const { type, message } = error.details[0];
    
    return res.status(errorMap(type as Errors)).json({ message });
  }
  
  next();
};
