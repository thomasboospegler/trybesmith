import express from 'express';
import ProductRouter from './routers/product.router';
import UserRouter from './routers/user.router';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

app.use('/users', UserRouter);

export default app;
