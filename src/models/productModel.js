import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name  is required'],
  },

  description: {
    type: String,
    required: [true, 'product description is required!'],
  },

  price: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
