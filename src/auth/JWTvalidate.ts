import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const statusCode = 401;
const secretCode = process.env.JWT_SECRET || 'secret';

export default (req: Request, res: Response, next: NextFunction): Response | void => {
  const { authorization: authToken } = req.headers;

  if (!authToken) return res.status(statusCode).json({ message: 'Token not found' });

  try {
    const user = jwt.verify(authToken, secretCode);

    if (!user) return res.status(statusCode).json('Invalid token');

    req.body = { ...req.body, user };

    next();
  } catch (error) {
    return res.status(statusCode).json({ message: 'Invalid token' });
  }
};
