const { Chance } = require('chance');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chance = new Chance()

const itemSchema = new Schema({
  _id: {
    type: String,
    unique: true,
    default: chance.String()
  },
  item: {
    type: String,
    required: true,
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