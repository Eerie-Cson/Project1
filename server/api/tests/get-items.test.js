const request = require('supertest'); 
const mongoose = require('mongoose');
const R = require('ramda');

const ItemRepository = require('../../api/services/items');
const itemModel = require('../model/item');
const app = require('../../app');
const product = require('../../helpers/generate-data');

const itemRepository = new ItemRepository();

let server;

beforeAll(async()=>{
  server = app.listen(2000);
  await mongoose.createConnection('mongodb://localhost:27017/test_db');
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

    const inputItems = items.map((item) => {      
      return {
        ID: item.ID,
        data: R.omit(['ID'], item)
      }
    });

    await itemRepository.createItem(inputItems[0])
    await itemRepository.createItem(inputItems[1])
    await itemRepository.createItem(inputItems[2])

    const response = await request(server).get('/items');

    expect(response.statusCode).toBe(200);

    expect(response.body).toStrictEqual(inputItems.map((item) => {
      return {
        data: item.data,
        id: item.ID
      }
    }))

  })
})
