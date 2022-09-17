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

    return await items.create(product);

  };
};

module.exports = ItemServices;
