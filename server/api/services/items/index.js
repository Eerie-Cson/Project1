const items = require('../../model/item');
class Items {
  async createItem({item, stock, price}){ 
    const product = await items.create({item, stock, price});
    return product;
  };
};

module.exports = Items;