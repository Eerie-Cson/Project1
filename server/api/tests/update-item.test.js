const request = require('supertest'); 
const mongoose = require('mongoose');
const itemModel = require('../model/item');
const R = require('ramda');

const ItemRepository = require('../../api/services/items/index');
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
})

afterAll(async () => {
  server.close();
  await mongoose.disconnect();
})

describe('UpdateItem endpoint', () => {
  it('should create new item', async () => {
  
    const item = product().once();
    const {ID, ...data } = item;
    console.log({id: ID, ...data})
    await itemModel.create({id: ID, ...data});
    const response = await request(server).patch(`/items/${ID}`);
    

    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(true);
  });
})
