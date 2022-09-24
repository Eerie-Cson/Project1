const ItemServices = require('../items');
const R = require('ramda');
const ItemRepository = require('../items/repository')
const product = require('../../../lib/generate-data')

const itemServices = new ItemServices();

afterEach(() => {
  jest.clearAllMocks();
});

describe('ItemServices', () => {
  describe('#createItem', () => {
    it('should create new item', async() => {

      const item = product().once();
      const input = R.omit(['ID'])(item);

      ItemRepository.exists = jest.fn();
      ItemRepository.create = jest.fn().mockReturnValue({
        id: item.ID,
        data: input
      });

      const result = await itemServices.createItem({
        ID: item.ID,
        data: input
      });

      expect(result).toBeDefined();
      expect(result).toStrictEqual({id: item.ID, data: input});
      expect(ItemRepository.create).toBeCalled();
      expect(ItemRepository.exists).toBeCalled();
    });

    it('should create multiple items', async () => {
      const items = product().times(3);

      ItemRepository.create = jest.fn();

      await Promise.all([ 
        items.map( (item) => itemServices.createItem({
            ID: item.ID,
            data: R.omit(['ID'])(item)
        })),
      ]);
      
      expect(ItemRepository.create).toHaveBeenCalledTimes(3)
    })
  });
 
})
