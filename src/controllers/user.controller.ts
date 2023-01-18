import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserService from '../services/user.service';

const secretCode = process.env.JWT_SECRET || 'secret';
    
const jwtConfig = { expiresIn: '2d', algorithm: 'HS256' };

export default class UserController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response): Promise<void> => {
    const userData = req.body;

    const createdUser = await this.userService.createUser(userData);

    const token = jwt.sign({ ...createdUser }, secretCode, jwtConfig as SignOptions);

    res.status(201).json({ token });
  };

  public login = async (req: Request, res: Response): Promise<Response | void> => {
    const { username, password } = req.body;

    const user = await this.userService.getUser(password);

    if (!user || username !== user.username) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const token = jwt.sign({ username, id: user.id }, secretCode, jwtConfig as SignOptions);

    res.status(200).json({ token });
  };
}
