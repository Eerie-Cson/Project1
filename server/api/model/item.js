const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chance = new Chance()

const itemSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  item: {
    type: String,
    require: true
  },
  stock: {
    type: Number,
    default: 0
  },
  price:{ 
    type: Number,
    defualt: 0.00
  }
}, {versionKey: false});

const itemModel = mongoose.model('items', itemSchema);
module.exports = itemModel;