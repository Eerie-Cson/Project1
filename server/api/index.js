const items = require('../model/schema');
class Items {
  async createItem({ item, stock, price }){

    const product = await items.create({
      item, stock, price
    });
    return product;

  }
}

module.exports = Items;