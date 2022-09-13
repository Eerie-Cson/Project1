const items = require('../model');
module.exports = {
  async createItem({item, stock, price}){ 
    const item = await items.create({item, stock, price});
    return item;
  },
};
