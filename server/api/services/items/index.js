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

  async displayItems() {
    return await items.find({});
  }

  async updateItem(ID, data) {
    const existingItem = await items.exists({id: ID});

    if(!existingItem) return {Error: 'Item does not exist'};

    await items.updateOne({
      id: ID,
      data
    });

    return true
  }
};

module.exports = ItemServices;
