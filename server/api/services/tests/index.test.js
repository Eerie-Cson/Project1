const Item = require('../../model/item');
const ItemServices = require('../items');
const { Chance } = require('chance');

const chance = new Chance();
const item = new ItemServices();

afterEach(() => {
  jest.clearAllMocks();
})
describe('ItemServices', () => {
  describe('#createDepartment', () => {
    it('should create new department', async() => {
      const data = {
        item: chance.word(),
        stock: chance.natural(),
        price: chance.floating({fixed: 2}),
      }
      Item.create = jest.fn().mockImplementation(() => data);
      
      const result = await item.createItem(data);
      console.log(result);
      expect(result).toBeDefined();
      expect(Item.create).toBeCalled();
      expect(result).toStrictEqual(data);
    })
  })
})