const request = require('supertest'); 
const app = require('../index');

describe('server response', ()=>{
  const server = app.listen(8000);
  afterAll(() => {
    server.close();
  });

  it('should give a response of 200', async ()=>{
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  })
})