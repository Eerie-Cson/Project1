const ItemServices = require('../items');
const R = require('ramda');
const ItemRepository = require('../items/repository')
const product = require('../../../lib/generate-data')

const items = new ItemServices();

afterEach(() => {
  jest.clearAllMocks();
});

describe('ItemServices', () => {
  describe('#createDepartment', () => {
    it('should create new department', async() => {
      
      const itemData = {
        id: product.ID,
        input: R.omit(['ID'])(product)
      };
      
      ItemRepository.create = jest.fn().mockReturnValue({
        id: itemData.id,
        data: itemData.input
      });

      const result = await items.createItem(itemData);

      expect(result).toBeDefined();
      expect(result).toStrictEqual({id: itemData.id, data: itemData.input});
      expect(ItemRepository.create).toBeCalled();
    })
  })
})