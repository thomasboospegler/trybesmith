import express from 'express';
import ProductRouter from './routers/product.router';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

export default app;
