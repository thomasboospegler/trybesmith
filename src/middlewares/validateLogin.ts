import { Request, Response, NextFunction } from 'express';
import { loginSchema } from './schemas';

export default (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const loginData = req.body;

  const { error } = loginSchema.validate(loginData);

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};
