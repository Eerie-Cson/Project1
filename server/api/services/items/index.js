const items = require('./repository');
const ID = require('../../../lib/generate-id');
class ItemServices {
  async createItem({item, stock, price}){

    const product = {
      ID,
      item,
      stock,
      price
    } 

    return await items.create(product);
  };
};

module.exports = ItemServices;
