const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  item: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  price:{ 
    type: Number,
    default: 0.00
  }
}, {versionKey: false});

const itemModel = mongoose.model('items', itemSchema);
module.exports = itemModel;