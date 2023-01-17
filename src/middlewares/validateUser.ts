import { Request, Response, NextFunction } from 'express';
import { userSchema } from './schemas';
import errorMap, { Errors } from '../utils/errorMap';

export default (req: Request, res: Response, next: NextFunction): Response | void => {
  const userData = req.body;

  const { error } = userSchema.validate(userData);

  if (error) {
    const { type, message } = error.details[0];
    
    return res.status(errorMap(type as Errors)).json({ message });
  }

  next();
};
