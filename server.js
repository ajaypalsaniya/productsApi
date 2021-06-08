import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { notFound, errorHandler } from './src/middleware/errorMiddleware.js';

import productRoutes from './src/routes/productRoutes.js';

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to database system'));

app.use(express.json());

app.use('/api/v1/', productRoutes);

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.get('*', (req, res) => {
  res.send('You have lost contact our support team for more details>');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
