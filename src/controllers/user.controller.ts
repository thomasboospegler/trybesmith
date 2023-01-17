import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserService from '../services/user.service';

const secret = process.env.JWT_SECRET || 'secret';
    
const jwtConfig = { expiresIn: '2d', algorithm: 'HS256' };

export default class UserController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response): Promise<void> => {
    const userData = req.body;

    const createdUser = await this.userService.createUser(userData);

    const token = jwt.sign({ ...createdUser }, secret, jwtConfig as SignOptions);

    res.status(201).json({ token });
  };
}
