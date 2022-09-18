const ItemRepository = require('../../lib/repository');
const itemModel = require('../model/item');

const itemRepository = new ItemRepository();

describe('Get model', () => {
  it('should get item model', () =>{
    itemRepository.setModel(itemModel);
    expect(itemRepository.getModel()).toBeDefined();
    expect(itemRepository.getModel()).toStrictEqual(itemModel);
  });
})