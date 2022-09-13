const items = require('../model');
class Items {
  async createItem({item, stock, price}){ 
    const item = await items.create({item, stock, price});
    return item;
  };
};

module.exports = Items;
