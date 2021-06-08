import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from '../controllers/productController.js';

router.get('/getProducts', getProducts);
router.post('/addProduct', createProduct);
router.get('/getProduct/:id', getProductById);
router.put('/updateProduct/:id', updateProduct);

export default router;
