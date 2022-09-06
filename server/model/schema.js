const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const categorySchema = new Schema({
  category: String,
  description: String
});

export const itemSchema = new Schema({
  item: String,
  price: Number,
  overallStock: Number,
  stock: Number,
})