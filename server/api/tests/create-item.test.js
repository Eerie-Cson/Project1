const request = require('supertest'); 
const app = require('../../server');
const mongoose = require('mongoose');
const itemModel = require('../model/item');
const product = require('../../lib/generate-data')

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

    const {ID, ...input } = product;
    const response = await request(server).post('/items').send(input);

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeDefined();
    expect(response.body.data).toStrictEqual(input);
  })
})
