const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item: String,
  stock: Number,
  price: Number
}, {versionKey: false});

const itemModel = mongoose.model('items', itemSchema);
module.exports = itemModel;