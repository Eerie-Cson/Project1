const Item = require('../item');
const mongoose = require('mongoose');
const R = require('ramda');

describe('model test', () => {
  beforeAll(async () => {
    mongoose.connect('mongodb://localhost:27017/test');
    await Item.deleteMany({});
  });

  afterEach(async () => {
    await Item.deleteMany({});
  })

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should create item', async () => {
    expect(Item).toBeDefined();
  });

  describe('#createModel', () => {
    it('should create new item', async () => {
      const item = { item: 'Red horse', stock: 20, price: 115 };
      const newItem = await Item.create(item);

      expect( R.omit(['_id']) (newItem.toObject()) ).toStrictEqual(item);
      expect(newItem.item).toStrictEqual(item.item);
    });
  })
})