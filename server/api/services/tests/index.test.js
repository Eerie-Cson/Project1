const ItemServices = require('../items');
const R = require('ramda');
const ItemRepository = require('../items/repository')
const product = require('../../../lib/generate-data')

const items = new ItemServices();

afterEach(() => {
  jest.clearAllMocks();
});

describe('ItemServices', () => {
  describe('#createItem', () => {
    it('should create new item', async() => {
      
      const itemData = {
        id: product.ID,
        data: R.omit(['ID'])(product)
      };

      ItemRepository.exists = jest.fn();

      ItemRepository.create = jest.fn().mockReturnValue({
        id: itemData.id,
        data: itemData.input
      });

      const result = await items.createItem(itemData);

      expect(result).toBeDefined();
      expect(result).toStrictEqual({id: itemData.id, data: itemData.input});
      expect(ItemRepository.create).toBeCalled();
      expect(ItemRepository.exists).toBeCalledTimes(1);
    })
  })
})