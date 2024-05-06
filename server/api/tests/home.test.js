const request = require('supertest'); 
const app = require('../../app');
const mongoose = require('mongoose');


let server;

beforeAll(async()=>{
  server = app.listen(2000);
});

afterAll(async () => {
  await mongoose.disconnect()
  server.close();
})

describe('CreateItem endpoint', () => {
  it('should say HOME', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('HOME');
  })

})
