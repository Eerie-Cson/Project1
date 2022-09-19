const request = require('supertest'); 
const mongoose = require('mongoose');
const itemModel = require('../model/item');
const { Chance } = require('chance');

const ItemRepository = require('../../api/services/items/index');
const app = require('../../server');
const product = require('../../lib/generate-data');
const { ID } = require('../../lib/generate-data');

const itemRepository = new ItemRepository();

beforeAll(async()=>{
  server = app.listen(3000);
  await mongoose.disconnect();
  await mongoose.connect('mongodb://localhost:27017/test_db');
  await itemModel.deleteMany({});
});

afterEach(async () => {
  await itemModel.deleteMany({});
})

afterAll(async () => {
  server.close();
  await mongoose.disconnect();
})

describe('CreateItem endpoint', () => {
  it('should create new item', async () => {
  
    const {ID, ...data } = product;
    const response = await request(server).post('/items').send(data);
  
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeDefined();
    expect(response.body.data).toStrictEqual(data);
  });
  
  it('should return error message', async() => {
      
    const chance = new Chance();
    const {ID, ...data } = product;
    
    const input = {
      ID: product.ID,
      data: {
        item: product.item,
        stock: chance.natural({min: 1, max: 5000}),
        price: chance.floating({min: 1, max: 5000, fixed: 2}),
      }
    };

    await itemRepository.createItem(input);

    const response = await request(server).post('/items').send(data);

    expect(response.body).toStrictEqual({Error: 'Item already exist'});  
  })
})
