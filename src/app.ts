import express from 'express';
import ProductRouter from './routers/product.router';
import UserRouter from './routers/user.router';
import OrderRouter from './routers/order.router';
import LoginRouter from './routers/login.router';

const app = express();

app.use(express.json());

app.use('/login', LoginRouter);

app.use('/products', ProductRouter);

app.use('/users', UserRouter);

app.use('/orders', OrderRouter);

export default app;
