const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Product name is required'], trim: true },
  price: { type: Number, required: [true, 'Product price is required'], min: [0, 'Product price must be a positive number'] },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: [true, 'Category is required'] },
  description: { type: String, trim: true },
  stock: { type: Number, required: [true, 'Stock quantity is required'], min: [0, 'Stock quantity must be a positive number'] },
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
