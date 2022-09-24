const request = require('supertest'); 
const mongoose = require('mongoose');
const R = require('ramda');

const ItemRepository = require('../../api/services/items');
const itemModel = require('../model/item');
const app = require('../../server');
const product = require('../../lib/generate-data');

const itemRepository = new ItemRepository();

beforeAll(async()=>{
  server = app.listen(3000);
  await mongoose.disconnect();
  await mongoose.connect('mongodb://localhost:27017/test_db');
  await itemModel.deleteMany({});
});

afterEach(async () => {
  await itemModel.deleteMany({});
});

afterAll(async () => {
  server.close();
  await mongoose.disconnect();
});

describe('Display all items from database', () => {
  it('should get all the data from the database', async () => {
    const items = product().times(3);

    await Promise.all(
      items.map((item) => itemRepository.createItem({
        ID: item.ID,
        data: R.omit(['ID'], item)
      })
      ),
    );

    const response = await request(server).get('/items');

    expect(response.statusCode).toBe(200);

    expect(response.body).toStrictEqual(items.map((item) => {
      const id = item.ID;
      const data = R.omit(['ID'])(item)
      return {
        id,
        data
      }
    }))

  })
})
