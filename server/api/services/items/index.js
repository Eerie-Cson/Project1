const items = require('./repository');
class ItemServices {
  async createItem(data){

    const {ID, input: {item, stock, price}} = data;
    const product = {
      id: ID,
      data: {
        item,
        stock,
        price
      }
    } 

    const res = await items.create(product);
    return res;
  };
};

module.exports = ItemServices;
