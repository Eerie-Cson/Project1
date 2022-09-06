const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: String,
  description: String
});

const itemSchema = new Schema({
  item: String,
  price: Number,
  overallStock: Number,
  stock: Number,
});

export const category = mongoose.model('Category', categorySchema);
