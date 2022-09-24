const request = require('supertest'); 
const mongoose = require('mongoose');
const itemModel = require('../model/item');
const R = require('ramda');

const ItemRepository = require('../../api/services/items/index');
const app = require('../../server');
const product = require('../../lib/generate-data');

const itemRepository = new ItemRepository();

beforeAll(async()=>{
  server = app.listen(2000);
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
  
    const item = product().once();
    const {ID, ...data } = item;
    const response = await request(server).post('/create/items').send(data);
  
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeDefined();
    expect(response.body.data).toStrictEqual(data);
  });
  
  it('should return error message', async() => {

    const items = product().times(2)
    const [item1, item2] = items
    
    const product1 = {
      ID: item1.ID,
      data: {
        item: item1.item,
        stock: item1.stock,
        price: item1.price
      }
    };

    await itemRepository.createItem(product1);

    const response = await request(server).post('/create/items').send({
      ...R.omit(['ID'])(item2),
      item: item1.item
    });

    expect(response.body).toStrictEqual({Error: 'Item already exist'});  
  })
})
