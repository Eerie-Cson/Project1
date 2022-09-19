const items = require('./repository');
class ItemServices {
  async createItem(input){
    const {ID, data: {item, stock, price}} = input;
    const existingItem =  await items.exists({item: item});
    
    if (existingItem) {
      return {Error: 'Item already exist'};
    };
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
