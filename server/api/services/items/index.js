const items = require('../../model/item');
class ItemServices {
  async createItem({item, stock, price}){ 
    const product = await items.create({item, stock, price});
    return product;
  };
};

module.exports = ItemServices;
